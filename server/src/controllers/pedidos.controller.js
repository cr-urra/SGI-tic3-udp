import pedidos from '../models/pedidos';
import usuarios from '../models/usuarios';
import historialDolar from '../models/historial_dolar';
import detallesDolar from '../models/detalles_dolar';
import productos from '../models/productos';
import proveedores from '../models/proveedores';
import unidadProductos from '../models/unidad_productos';
import detallesPedidos from '../models/detalles_pedidos';
import tiene from '../models/tiene';
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
import {database} from '../database/database';

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

export const getAllPedidosBetweenDates = async (req, res) => {
    try{
        let id = req.body.Producto.id;
        let minDate = req.body.fecha1;
        let maxDate = req.body.fecha2;
        if (minDate == null) minDate = new Date(0,0,0);
        let lastYear = new Date().getFullYear()+1;
        if (maxDate == null) maxDate = new Date(lastYear,11,11);
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
                proveedores,
                {
                    model: tiene,
                    where:{
                        productos_id: id
                    },
                    include: [
                        {
                            model: productos,
                            include: [
                                unidadProductos
                            ]
                        }
                    ]
                }
            ]
        });
        const filter = allPedidos.filter((element) => {
            return new Date(element.dataValues.fecha_llegada_real) <= new Date(maxDate) && new Date(element.dataValues.fecha_llegada_real) >= new Date(minDate)
        })
        res.json({
            resultado: true, 
            message: "",
            pedidos: filter
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
export const getAllPedidosDashboards = async (req, res) => {
    try{
        // Dashboard Cantidad de importación por proveedor en KG anual
        const [resultsProovedoresConPedidos] = await database.query('select distinct proveedores.nombre from pedidos, proveedores where pedidos.proveedores_id = proveedores.id');
        const [resultsCantPedidosProveedorKG] = await database.query('select p.id as id, p.codigo as codigo, p.fecha_vencimiento as fecha, t.cantidad*u.valor_unidad as cantidad, pr.id as id_proveedor, pr.nombre as nombre_proveedor from pedidos as p, tiene as t, proveedores as pr, productos as prod, unidad_productos as u where p.id = t.pedidos_id and p.proveedores_id = pr.id and t.productos_id = prod.id and prod.unidad_productos_id = u.id');
        let cantidadPedidosProveedorAnualKG = [];
        let arrYears = [];
        resultsProovedoresConPedidos.forEach(elementProv => {
            cantidadPedidosProveedorAnualKG.push({
                nombre: elementProv.nombre,
                cantidad: []
            });
            const indiceProveedor = cantidadPedidosProveedorAnualKG.length - 1;
            resultsCantPedidosProveedorKG.filter(elementPedido => elementPedido.nombre_proveedor == elementProv.nombre).forEach(elementData => {
                const fecha = new Date(elementData.fecha);
                const aux = cantidadPedidosProveedorAnualKG.filter(elementConsulta => elementConsulta.nombre == elementProv.nombre)[0];
                if(aux.cantidad == []) {
                    cantidadPedidosProveedorAnualKG.cantidad.push({
                        año: fecha.getFullYear(),
                        cantidadMes: [0,0,0,0,0,0,0,0,0,0,0,0]
                    });
                } else {
                    let yearEncontrado = false;
                    let indiceYear = 0;
                    for (let i = 0; i < aux.cantidad.length; i++) {
                        if (aux.cantidad[i].año == fecha.getFullYear()) {
                            yearEncontrado = true;
                            break;
                        };
                        indiceYear +=  1;
                    };
                    if (yearEncontrado) {
                        cantidadPedidosProveedorAnualKG[indiceProveedor].cantidad[indiceYear].cantidadMes[fecha.getMonth()] += elementData.cantidad;
                    } else {
                        cantidadPedidosProveedorAnualKG[indiceProveedor].cantidad.push({
                            año: fecha.getFullYear(),
                            cantidadMes: [0,0,0,0,0,0,0,0,0,0,0,0]
                        });
                        indiceYear = cantidadPedidosProveedorAnualKG[indiceProveedor].cantidad.length - 1;
                        cantidadPedidosProveedorAnualKG[indiceProveedor].cantidad[indiceYear].cantidadMes[fecha.getMonth()] += elementData.cantidad;
                    };
                };
                if (arrYears == []) {
                    arrYears.push(new Date(elementData.fecha).getFullYear());
                } else {
                    let bool = true;
                    arrYears.forEach(element => {
                        if (element == new Date(elementData.fecha).getFullYear()) {
                            bool = false;
                        }
                    });
                    if (bool) {
                        arrYears.push(new Date(elementData.fecha).getFullYear());
                    };
                };
            });
        });

        // Total de dólares gastados por proveedor anual

        //Filtrar por proveedor

        //Organizar por año, cada año un proveedor, cada proveedor su gasto mensuale en el respectivo año
        const [resultsDolaresPorProveedor] = await database.query('select p.id as pedido_id, p.codigo as pedido_codigo, p.fecha_vencimiento as fecha_pedido, pr.nombre as nombre_proveedor, pro.codigo as codigo_producto, t.cantidad as cantidad_producto, h.precio as precio_producto, h.fecha as fecha_precio_producto from pedidos as p, proveedores as pr, tiene as t, productos as pro, historial_precios as h where p.id = t.pedidos_id and t.productos_id = pro.id and pro.proveedores_id = pr.id and pro.id = h.productos_id');
        const datosTotal = {
            cantidadPedidosProveedorAnualKG: {
                datos: cantidadPedidosProveedorAnualKG,
                años: arrYears
            },
            dolaresPorProveedorAnual: {
                datos: resultsDolaresPorProveedor
            }
        };
        res.json({
            resultado: true,
            message: "",
            consultas: datosTotal
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            consultas: null
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