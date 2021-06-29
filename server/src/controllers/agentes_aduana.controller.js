import agentes_aduana from '../models/agentes_aduana';
import cuentas_corrientes from '../models/cuentas_corrientes';
import pedidos from '../models/pedidos';
import observaciones from '../models/observaciones';
import telefonos_agentes_aduana from '../models/telefonos_agentes_aduana';
import * as cuentasCorrientesController from './cuentas_corrientes.controller';
import * as pedidosController from './pedidos.controller';
import * as observacionesController from './observaciones.controller';
import * as telefonosAgentesAduanaController from './telefonos_agentes_aduana.controller';


export const createAgentesAduana = async (req, res) => {
    try{
        const {nombre, apellido, correo, numero_cuenta, rut, bancos_agentes_aduana_id} = req.body;
        let newAgenteAduana = await agentes_aduana.create({
            nombre,
            apellido,
            correo,
            numero_cuenta, 
            rut,
            bancos_agentes_aduana_id,
            vigencia: true
        },{
            fields: [
                'nombre',
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut',
                'bancos_agentes_aduana_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Agente de aduana creado correctamente",
            agentes_aduana: newAgenteAduana
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
        const agenteAduanaUpdate = await agentes_aduana.update({
            body
        },
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
    try{
        const {id} = req.params;
        const agente_aduana = await agentes_aduana.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'nombre', 
                'apellido',
                'correo',
                'numero_cuenta', 
                'rut',
                'bancos_agentes_aduana_id'
            ],
            include:[
                pedidos,
                observaciones,
                cuentas_corrientes,
                telefonos_agentes_aduana
            ]
        });
        
        if(agente_aduana){

            let pedidosIds = [];
            let observacionesIds = [];
            let telefonosAgentesAduanaIds = [];

            agente_aduana.dataValues.pedidos.forEach(element => {
                pedidosIds.push(parseInt(element.dataValues.id));
            });
            agente_aduana.dataValues.observaciones.forEach(element => {
                observacionesIds.push(parseInt(element.dataValues.id));
            });

            const cuentaCorrienteId = agente_aduana.dataValues.cuentas_corrientes.id;

            agente_aduana.dataValues.telefonos_agentes_aduana.forEach(element => {
                telefonosAgentesAduanaIds.push(parseInt(element.dataValues.id));
            });

            req.params = {
                id: pedidosIds
            };
            let aux = await pedidosController.deletePedidos(req, res);
            
            req.params = {
                id: observacionesIds
            };
            aux.resultado ? aux = await observacionesController.deleteObservaciones(req, res) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

            req.params = {
                id: cuentaCorrienteId
            };
            aux.resultado ? aux = await cuentasCorrientesController.deleteCuentasCorrientes(req, res) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

            req.params = {
                id: telefonosAgentesAduanaIds
            };
            aux.resultado ? aux = await telefonosAgentesAduanaController.deleteTelefonosAgentesAduana(req, res) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

            let agenteAduanaUpdate;
            aux.resultado ? agenteAduanaUpdate = await agentes_aduana.update({
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
            message: 'Agente de aduana eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
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
                'rut',
                'bancos_agentes_aduana_id'
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
                'rut',
                'bancos_agentes_aduana_id'
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
                'rut',
                'bancos_agentes_aduana_id'
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