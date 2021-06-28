import observaciones from '../models/observaciones';
import gastos_extras from '../models/gastos_extras';
import * as gastosExtrasController from './gastos_extras.controller';

export const createObservaciones = async (req, res) => {
    try{
        const {observacion, fecha, gasto, pedidos_id} = req.body;
        let newObservacion = await observaciones.create({
            observacion, 
            fecha, 
            gasto, 
            pedidos_id,
            vigencia: true
        },{
            fields: [
                'observacion', 
                'fecha', 
                'gasto', 
                'pedidos_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Observación creada correctamente",
            observaciones: newObservacion
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            observaciones: null
        });
    };
};


export const updateObservaciones = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const observacionUpdate = await observaciones.update({
            body
        },
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Observación actualizada',
            resultado: true,
            observaciones: observacionUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            observaciones: null
        });
    }
};

export const deleteObservaciones = async (req, res) => {
    try{
        const {id} = req.params;
        const observacion = await observaciones.findOne({
            where: {
                id
                
            },
            attributes: [
                'id',
                'observacion', 
                'fecha', 
                'gasto', 
                'pedidos_id'
            ],
            include = [
                gastos_extras
            ]
        });
        if(observacion){
            let gastosExtrasIds = [];
            observacion.dataValues.gastos_extras.forEach(element => {
                gastosExtrasIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
                id = gastosExtrasIds
            };
            let aux = await gastosExtrasController.deleteGastosExtras(req, res);
            let observacionUpdate;
            aux.resultado ? observacionUpdate = await observaciones.update({
                vigencia = false
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

            res.json({
                message: 'Observación actualizada',
                resultado: true,
                observaciones: observacionUpdate
            });
        }
        
        res.json({
            resultado: true, 
            message: 'Observación eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllObservaciones = async (req, res) => {
    try{
        const allObservaciones = await observaciones.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'observacion', 
                'fecha', 
                'gasto', 
                'pedidos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observaciones: allObservaciones
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observaciones: null
        });
    };
};

export const getObservacionesId = async (req, res) => {
    try{
        const {id} = req.params;
        const observacion = await observaciones.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'observacion', 
                'fecha', 
                'gasto', 
                'pedidos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            observaciones: observacion
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observaciones: null
        });
    };
};

export const getAllObservacionesWithFalse = async (req, res) => {
    try{
        const allObservaciones = await observaciones.findAll({
            attributes: [
                'id',
                'observacion', 
                'fecha', 
                'gasto', 
                'pedidos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observaciones: allObservaciones
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observaciones: null
        });
    };
};