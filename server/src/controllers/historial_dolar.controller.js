import historialDolar from '../models/historial_dolar.model';
import detalles_dolar from '../models/detalles_dolar.model';
import * as detallesDolarUpdate from './detalles_dolar.controller';
import sequelize from 'sequelize';

export const createHistorialDolar = async (req, res) => {
    try{
        const {tipo, pedidos_id} = req.body;
        let newHistorialDolar = await historialDolar.create({
            tipo,
            fecha: sequelize.literal('CURRENT_TIMESTAMP'),
            vigencia: true,
            pedidos_id,
            dolar_mensual_id: 1
        },{
            fields: [
                'tipo', 
                'fecha',
                'vigencia',
                'pedidos_id',
                'dolar_mensual_id'
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
        const historiaDolarUpdate = await historialDolar.update(
            body
        ,
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
    const body = req.body;
    try{
        const {id} = req.params;
        const params = req.params;
        const getHistorialDolar = await historialDolar.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'tipo', 
                'fecha',
                'vigencia',
                'pedidos_id'
            ],
            include: [
                detalles_dolar
            ]
        });
        if(getHistorialDolar){
            let aux = {
                resultado: true
            };
            req.params = {
                id: getHistorialDolar.dataValues.detalles_dolar.dataValues.id
            };
            req.body = {
                cascade: true
            };
            aux = await detallesDolarUpdate.deleteDetallesDolar(req, res);
            let historialDolarUpdate;
            if(aux.resultado) historialDolarUpdate = await historialDolar.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }); 
            else if(aux.resultado == false && body.cascade == true) return {
                resultado: false
            };
            else res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            if(body.cascade) return {
                resultado: true
            };
            else res.json({
                resultado: true, 
                message: 'Dolar eliminado correctamente de historial'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            };
            else res.json({
                resultado: true, 
                message: 'Dólar no encontrado'
            });
        };
    }catch(e){
        console.log(e);
        if(req.body.cascade) return {
            resultado: false
        };
        else res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
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
                'tipo', 
                'fecha',
                'vigencia',
                'pedidos_id'
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
                vigencia: true
            },
            attributes: [
                'id',
                'tipo', 
                'fecha',
                'vigencia',
                'pedidos_id'
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
                'tipo', 
                'fecha',
                'vigencia',
                'pedidos_id'
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