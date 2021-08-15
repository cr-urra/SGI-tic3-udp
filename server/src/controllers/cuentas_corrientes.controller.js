import cuentasCorrientes from '../models/cuentas_corrientes';
import movimientos from '../models/movimientos';
import * as movimientosController from './movimientos.controller';

export const createCuentasCorrientes = async (req, res) => {
    try{
        const {debe, haber, agentes_aduana_id} = req.body;
        let newCuentasCorrientes = await cuentasCorrientes.create({
            debe, 
            haber, 
            agentes_aduana_id,
            vigencia: true
        },{
            fields: [
                'debe', 
                'haber', 
                'agentes_aduana_id',
                'vigencia'
            ]
        });
        const r = {
            resultado: true,
            message: "Cuenta corriente creada correctamente",
            cuentasCorrientes: newCuentasCorrientes
        };
        return r;
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            cuentasCorrientes: null
        });
    };
};


export const updateCuentasCorrientes = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const cuentasCorrientesUpdate = await cuentasCorrientes.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Cuenta corriente actualizada correctamente',
            resultado: true,
            cuentasCorrientes: cuentasCorrientesUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            cuentasCorrientes: null
        });
    }
};

export const deleteCuentasCorrientes = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const cuentaCorriente = await cuentasCorrientes.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ],
            include: [
                movimientos
            ]
        });
        if(cuentaCorriente){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            };
            cuentaCorriente.dataValues.movimientos.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await movimientosController.deleteMovimientos(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            let cuentaCorrienteUpdate;
            if(aux.resultado) cuentaCorrienteUpdate = await cuentasCorrientes.update({
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
                message: 'Cuenta corriente eliminada correctamente'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            };
            else res.json({
                resultado: true, 
                message: 'Cuenta corriente no encontrada'
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

export const getAllCuentasCorrientes = async (req, res) => {
    try{
        const allCuentasCorrientes = await cuentasCorrientes.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            cuentasCorrientes: allCuentasCorrientes
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            cuentasCorrientes: null
        });
    };
};

export const getCuentasCorrientesId = async (req, res) => {
    try{
        const {id} = req.params;
        const cuentaCorriente = await cuentasCorrientes.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            cuentasCorrientes: cuentaCorriente
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            cuentasCorrientes: null
        });
    };
};

export const getAllCuentasCorrientesWithFalse = async (req, res) => {
    try{
        const allCuentasCorrientes = await cuentasCorrientes.findAll({
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            cuentasCorrientes: allCuentasCorrientes
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            cuentasCorrientes: null
        });
    };
};

export const updateCuentasCorrientesForAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const cuentasCorrientesUpdate = await cuentasCorrientes.update(
            body
        ,
        {
            where: {
                agentes_aduana_id: id,
                vigencia: true
            }
        });
        const cuentaCorriente = await cuentasCorrientes.findOne({
            where: {
                agentes_aduana_id: id,
                vigencia: true
            },
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            message: 'Cuenta corriente actualizada correctamente',
            resultado: true,
            cuentasCorrientes: cuentaCorriente
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            cuentasCorrientes: null
        });
    }
};