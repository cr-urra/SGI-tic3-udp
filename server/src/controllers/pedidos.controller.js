import pedidos from '../models/pedidos';
import usuarios from '../models/usuarios';
import historialDolar from '../models/historial_dolar';
import detallesDolar from '../models/detalles_dolar';
import productos from '../models/productos';
import detallesPedidos from '../models/detalles_pedidos';
import documentos from '../models/documentos';
import observaciones from '../models/observaciones';
import gastosExtras from '../models/gastos_extras';
import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import * as detallesPedidosController from './detalles_pedidos.controller';
import * as documentosController from './documentos.controller';
import * as observacionesController from './observaciones.controller';
import * as gastosExtrasController from './gastos_extras.controller';
import * as historialDolarController from './historial_dolar.controller';
import historial_dolar from '../models/historial_dolar';
import config from '../config';
import agentesAduana from '../models/agentes_aduana';
import cuentasCorrientes from '../models/cuentas_corrientes';
import detalles_pedidos from '../models/detalles_pedidos';
import gastos_extras from '../models/gastos_extras';

export const createPedidos = async (req, res) => {
    try{
        const {
                codigo, 
                pago_inicial,
                estado,
                tipo_de_envio,
                flete,
                valor_cif,
                fecha_vencimiento,
                tipo_pago,
                fecha_inicial,
                seguro,
                proveedores_id
            } = req.body;
        const token = req.cookies.token;
        const decoded = jwt.verify(token, config.SECRET);
        const user_id = decoded.id;
        const newPedido = await pedidos.create({
                codigo, 
                pago_inicial, 
                pago_final: 0,
                fecha_pago: sequelize.literal('CURRENT_TIMESTAMP'), 
                fecha_salida: sequelize.literal('CURRENT_TIMESTAMP'), 
                fecha_llegada_real: sequelize.literal('CURRENT_TIMESTAMP'), 
                fecha_llegada_estimada: sequelize.literal('CURRENT_TIMESTAMP'), 
                fecha_aduana: sequelize.literal('CURRENT_TIMESTAMP'),
                estado,
                tipo_de_envio,
                flete,
                valor_cif,
                honorarios: 0,
                arancel: 0,
                gastos_agencia: 0,
                numero_din: 0,
                cuentas_bancos_id: null,
                agentes_aduana_id: null,
                proveedores_id,
                dolar_mensual_id: null,
                fecha_vencimiento,
                tipo_pago,
                fecha_inicial,
                seguro,
                vigencia: true
        },{
            fields: [
                'codigo', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial',
                'seguro',
                'vigencia'
            ]
        });
        console.log(newPedido);
        req.body = {
            diferencia_de_costos: 0,
            pedidos_id: newPedido.dataValues.id
        };
        let newDetallePedido = await detallesPedidos.create({
            diferencia_de_costos: 0, 
            pedidos_id: newPedido.dataValues.id,
            vigencia: true
        },{
            fields: [
                'diferencia_de_costos', 
                'pedidos_id',
                'vigencia'
            ]
        });
        const user = await usuarios.findOne({
            where: {
                id: user_id
            },
            attributes: [
                'id'
            ]
        });
        newPedido.addUsuarios([user]);
        res.json({
            resultado: true,
            message: "Pedido creado correctamente",
            pedido: newPedido 
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            pedido: null
        });
    };
};


export const updatePedidos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const pedidoUpdate = await pedidos.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Pedido actualizado',
            resultado: true,
            pedidos: pedidoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            pedidos: null
        });
    }
};

export const deletePedidos = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const pedido = await pedidos.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id' 
            ],
            include: [
                detalles_pedidos,
                documentos,
                historial_dolar,
                gastos_extras,
                observaciones
            ]
        });
        if(pedido){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            };
            req.params = {
                id: pedido.detalles_pedido.dataValues.id
            };
            if(aux.resultado) aux = await detallesPedidosController.deleteDetallesPedidos(req, res);
            else if(aux.resultado == false && body.cascade == true) return {
                resultado: false
            }
            else res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            pedido.dataValues.documentos.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await documentosController.deleteDocumentos(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            pedido.dataValues.observaciones.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await observacionesController.deleteObservaciones(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            pedido.dataValues.gastos_extras.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await gastosExtrasController.deleteGastosExtras(req, req) 
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            pedido.dataValues.historial_dolars.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await historialDolarController.deleteHistorialDolar(req, req) 
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            let pedidoUpdate;
            if(aux.resultado) pedidoUpdate = await pedidos.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }) 
            else if(aux.resultado == false && body.cascade == true) return {
                resultado: false
            };
            else res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            }); 
            if(body.cascade) return {
                resultado: true
            }
            else res.json({
                resultado: true, 
                message: 'Pedido eliminado correctamente'
            });
        }else{
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: "Pedido no encontrado"
            });
        };
    }catch(e){
        console.log(e);
        if(body.cascade) return {
            resultado: false
        }
        else res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    }; 
};

export const getAllPedidos = async (req, res) => {
    try{
        const allPedidos = await pedidos.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'codigo', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial',
                'seguro',
                'vigencia'
            ],
            order: [
                ['id', 'DESC']
            ],
            include: [
                observaciones,
                {
                    model: historialDolar,
                    include: [
                        detallesDolar
                    ]
                },
                {
                    model: agentesAduana,
                    include: [
                        cuentasCorrientes
                    ]
                }
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            pedidos: allPedidos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            pedidos: null
        });
    };
};

export const getPedidosId = async (req, res) => {
    try{
        const {id} = req.params;
        const pedido = await pedidos.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'codigo', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial',
                'seguro',
                'vigencia'
            ],
            include: [
                observaciones,
                {
                    model: historialDolar,
                    include: [
                        detallesDolar
                    ]
                },
                {
                    model: agentesAduana,
                    include: [
                        cuentasCorrientes
                    ]
                }
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            pedidos: pedido
        }); 

    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            pedidos: null
        });
    };
};

export const getAllPedidosWithFalse = async (req, res) => {
    try{
        const allPedidos = await pedidos.findAll({
            attributes: [
                'id',
                'codigo', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial',
                'seguro',
                'vigencia'
            ],
            order: [
                ['id', 'DESC']
            ],
            include: [
                observaciones,
                {
                    model: historialDolar,
                    include: [
                        detallesDolar
                    ]
                },
                {
                    model: agentesAduana,
                    include: [
                        cuentasCorrientes
                    ]
                }
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            pedidos: allPedidos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            pedidos: null
        });
    };
};