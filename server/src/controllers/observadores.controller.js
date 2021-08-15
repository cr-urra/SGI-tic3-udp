import observadores from '../models/observadores';
import efectua from '../models/efectua';
import * as observacionesController from './observaciones.controller';

export const createObservadores = async (req, res) => {
    try{
        const {rut, nombre} = req.body;
        let newObservador = await observadores.create({
            rut, 
            nombre, 
            vigencia: true
        },{
            fields: [
                'rut', 
                'nombre', 
                'vigencia', 
            ]
        });
        res.json({
            resultado: true,
            message: "Observador creado correctamente",
            observadores: newObservador
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            observadores: null
        });
    };
};


export const updateObservadores = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const observadorUpdate = await observadores.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Observador actualizado correctamente',
            resultado: true,
            observadores: observadorUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            observadores: null
        });
    }
};

export const deleteObservadores = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const observador = await observadores.findOne({
            where: {
                id,
                vigencia: true  
            },
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ],
            include: [
                efectua
            ]
        });
        if(observador){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            };
            observador.dataValues.efectua.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.observaciones_id)
                };
                if(aux.resultado) aux = await observacionesController.deleteObservaciones(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                };
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            let observadorUpdate = null;
            if(aux.resultado) await observadores.update({
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
            }
            else res.json({
                resultado: true, 
                message: 'Obsevador eliminado correctamente'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Obsevador no encontrado'
            });
        };
    }catch(e){
        console.log(e);
        if(body.cascade) return {
            resultado: false
        }
        else res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    };
    
};

export const getAllObservadores = async (req, res) => {
    try{
        const allObservadores = await observadores.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observadores: allObservadores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observadores: null
        });
    };
};

export const getObservadoresId = async (req, res) => {
    try{
        const {id} = req.params;
        const observador = await observadores.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            observadores: observador
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observadores: null
        });
    };
};

export const getAllObservadoresWithFalse = async (req, res) => {
    try{
        const allObservadores = await observadores.findAll({
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observadores: allObservadores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observadores: null
        });
    };
};