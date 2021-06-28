import historialDolar from '../models/historial_dolar';
import detalles_dolar from '../models/detalles_dolar';
import * as detallesDolarUpdate from './detalles_dolar.controller';
import sequelize from 'sequelize';
import historial_dolar from '../models/historial_dolar';

export const createHistorialDolar = async (req, res) => {
    try{
        const {precio, dolar_mensual_id} = req.body;
        let newHistorialDolar = await historialDolar.create({
            precio, 
            dolar_mensual_id,
            fecha: sequelize.literal('CURRENT_TIMESTAMP'),
            vigencia: true
        },{
            fields: [
                'precio', 
                'dolar_mensual_id',
                'fecha',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Dolar creado en el historial correctamente",
            historialDolar: newHistorialDolar
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            historialDolar: null
        });
    };
};


export const updateHistorialDolar = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const historiaDolarUpdate = await historialDolar.update({
            body
        },
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Dolar actualizado correctamente en historial',
            resultado: true,
            historialDolar: historiaDolarUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            historialDolar: null
        });
    }
};

export const deleteHistorialDolar = async (req, res) => {
    try{
        const {id} = req.params;
        const getHistorialDolar = await historialDolar.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'fecha', 
                'precio', 
                'dolar_mensual_id'
            ],
            include:[
                detalles_dolar
            ]
        });
        if(getHistorialDolar){

            let detallesDolarId = historial_dolar.dataValues.detalles_dolar.id
            req.params = {
                id : detallesDolarId
            };
            let aux = await detallesDolarUpdate.deleteDetallesDolar(req, res);
            let historialDolarUpdate;
            aux.resultado ? historialDolarUpdate = await historialDolar.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }): res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
        }
        res.json({
            resultado: true, 
            message: 'Dolar eliminado correctamente de historial'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllHistorialDolar = async (req, res) => {
    try{
        const allHistorialDolar = await historialDolar.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'fecha', 
                'precio', 
                'dolar_mensual_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            historialDolar: allHistorialDolar
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialDolar: null
        });
    };
};

export const getHistorialDolarId = async (req, res) => {
    try{
        const {id} = req.params;
        const getHistorialDolar = await historialDolar.findOne({
            where: {
                id,
                vigencia : true
            },
            attributes: [
                'id',
                'fecha', 
                'precio', 
                'dolar_mensual_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            historialDolar: getHistorialDolar
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialDolar: null
        });
    };
};

export const getAllHistorialDolarWithFalse = async (req, res) => {
    try{
        const allHistorialDolar = await historialDolar.findAll({
            attributes: [
                'id',
                'fecha', 
                'precio', 
                'dolar_mensual_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            historialDolar: allHistorialDolar
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialDolar: null
        });
    };
};