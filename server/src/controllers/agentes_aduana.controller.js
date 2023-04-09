import agentes_aduana from '../models/agentes_aduana.model';
import cuentas_corrientes from '../models/cuentas_corrientes.model';
import pedidos from '../models/pedidos.model';
import observaciones from '../models/observaciones.model';
import telefonos_agentes_aduana from '../models/telefonos_agentes_aduana.model';
import asume from '../models/asume.model';
import observadores from '../models/observadores.model';
import bancos_agentes_aduana from '../models/bancos_agentes_aduana.model';
import * as cuentasCorrientesController from './cuentas_corrientes.controller';
import * as pedidosController from './pedidos.controller';
import * as observacionesController from './observaciones.controller';
import * as telefonosAgentesAduanaController from './telefonos_agentes_aduana.controller';
import * as bancosAgentesAduanaController from './bancos_agentes_aduana.controller';
import * as observadoresController from './observadores.controller';

export const createAgentesAduana = async (req, res) => {
    try{
        const {nombre, apellido, correo, numero_cuenta, rut} = req.body;
        let newAgenteAduana = await agentes_aduana.create({
            nombre,
            apellido,
            correo,
            numero_cuenta, 
            rut,
            vigencia: true
        },{
            fields: [
                'nombre',
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut',
                'vigencia'
            ]
        });
        const id  = newAgenteAduana.dataValues.id;
        req.body = {
            debe: 0,
            haber: 0,
            agentes_aduana_id: id
        };
        const cuenta = await cuentasCorrientesController.createCuentasCorrientes(req, res);
        res.json({
            resultado: true,
            message: "Agente de aduana creado correctamente",
            agentes_aduana: newAgenteAduana,
            cuenta_corriente: cuenta
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            agentes_aduana: null
        });
    };
};


export const updateAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const agenteAduanaUpdate = await agentes_aduana.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Agente de aduana actualizado correctamente',
            resultado: true,
            agentes_aduana: agenteAduanaUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            agentes_aduana: null
        });
    }
};

export const deleteAgentesAduana = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const agente_aduana = await agentes_aduana.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre', 
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut'
            ],
            include:[
                pedidos,
                asume,
                cuentas_corrientes,
                telefonos_agentes_aduana,
                bancos_agentes_aduana
            ]
        });
        if(agente_aduana){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            };
            req.params = {
                id: parseInt(agente_aduana.dataValues.bancos_agentes_aduana.dataValues.id)
            };
            if(aux.resultado) aux = await bancosAgentesAduanaController.deleteBancosAgentesAduana(req, res);
            else if(aux.resultado == false && body.cascade == true) return {
                resultado: false
            };
            else res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            agente_aduana.dataValues.pedidos.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.id)
                };
                if(aux.resultado) aux = await pedidosController.deletePedidos(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            agente_aduana.dataValues.telefonos_agentes_aduanas.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.id)
                };
                if(aux.resultado) aux = await telefonosAgentesAduanaController.deleteTelefonosAgentesAduana(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false 
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            agente_aduana.dataValues.asumes.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.observadores_id)
                };
                if(aux.resultado) aux = await observadoresController.deleteObservadores(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false 
                }
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            req.params = {
                id: parseInt(agente_aduana.dataValues.cuentas_corriente.dataValues.id)
            };
            if(aux.resultado) aux = await cuentasCorrientesController.deleteCuentasCorrientes(req, res) 
            else if (aux.resultado == false && body.cascade == true) return {
                resultado: false
            }
            else res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            let agenteAduanaUpdate;
            if(aux.resultado) agenteAduanaUpdate = await agentes_aduana.update({
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
                message: 'Agente de aduana eliminado correctamente'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Agente de aduana no encontrado'
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

export const getAllAgentesAduana = async (req, res) => {
    try{
        const allAgentesAduana = await agentes_aduana.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre', 
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            agentes_aduana: allAgentesAduana
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            agentes_aduana: null
        });
    };
};

export const getAllAgentesAduanaWithFalse = async (req, res) => {
    try{
        const allAgentesAduana = await agentes_aduana.findAll({
            attributes: [
                'id', 
                'nombre', 
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            agentes_aduana: allAgentesAduana
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            agentes_aduana: null
        });
    };
};

export const getAgentesAduanaId = async (req, res) => {
    try{
        const {id} = req.params;
        const agente_aduana = await agentes_aduana.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre', 
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            agentes_aduana: agente_aduana
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            agentes_aduana: null
        });
    };
};