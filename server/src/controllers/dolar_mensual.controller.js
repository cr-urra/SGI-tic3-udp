import dolarMensual from '../models/dolar_mensual';
import sequelize from 'sequelize';
import pedidos from '../models/pedidos';
import historial_dolar from '../models/historial_dolar';
import * as pedidosController from './pedidos.controller';
import * as historialDolarController from './historial_dolar.controller';

export const createDolarMensual = async (req, res) => {
    try{
        const {valor_mensual} = req.body;
        let newDolarMensual = await dolarMensual.create({
            valor_mensual,
            fecha_registro: sequelize.literal('CURRENT_TIMESTAMP'),
            vigencia: true
        },{
            fields: [
                'valor_mensual',
                'fecha_registro',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Dolar mensual creado correctamente",
            dolarMensual: newDolarMensual
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            dolarMensual: null
        });
    };
};


export const updateDolarMensual = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const dolarMensualUpdate = await dolarMensual.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Dolar mensual actualizado correctamente',
            resultado: true,
            dolarMensual: dolarMensualUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            dolarMensual: null
        });
    }
};

export const deleteDolarMensual = async (req, res) => {
    try{
        const {id} = req.params;
        const params = req.params;
        const getDolarMensual = await dolarMensual.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'valor_mensual', 
                'fecha_registro'
            ],
            include: [
                pedidos,
                historial_dolar
            ]
        });
        if(getDolarMensual){
            let aux = {
                resultado: true
            };
            getDolarMensual.dataValues.historial_dolars.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.id)
                };
                req.body = {
                    cascade: true
                };
                if(aux.resultado) aux = await historialDolarController.deleteHistorialDolar(req, res);
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });;
            });
            getDolarMensual.dataValues.pedidos.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.id)
                };
                req.body = {
                    cascade: true,
                    origin: "dolarMensual"
                };
                if(aux.resultado) aux = await pedidosController.deletePedidos(req, res);
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            let dolarMensualUpdate;
            if(aux.resultado) dolarMensualUpdate = await getDolarMensual.update({
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
            res.json({
                resultado: true, 
                message: 'Dolar mensual eliminado correctamente'
            });
        } else {
            res.json({
                resultado: true, 
                message: 'Dolar mensual no encontrado'
            });
        }
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllDolarMensual = async (req, res) => {
    try{
        const allDolarMensual = await dolarMensual.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'valor_mensual', 
                'fecha_registro'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            dolarMensual: allDolarMensual
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            dolarMensual: null
        });
    };
};

export const getDolarMensualId = async (req, res) => {
    try{
        const {id} = req.params;
        const getDolarMensual = await dolarMensual.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'valor_mensual', 
                'fecha_registro'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            dolarMensual: getDolarMensual
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            dolarMensual: null
        });
    };
};

export const getAllDolarMensualWithFalse = async (req, res) => {
    try{
        const allDolarMensual = await dolarMensual.findAll({
            attributes: [
                'id',
                'valor_mensual', 
                'fecha_registro',
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            dolarMensual: allDolarMensual
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            dolarMensual: null
        });
    };
};