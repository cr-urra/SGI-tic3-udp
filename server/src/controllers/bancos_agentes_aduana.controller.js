import bancosAgentesAduana from '../models/bancos_agentes_aduana';
import agentes_aduana from '../models/agentes_aduana';
import * as agentesAduanaController from './agentes_aduana.controller'

export const createBancosAgentesAduana = async (req, res) => {
    try{
        const {numero_cuenta, tipo_cuenta, nombre_banco} = req.body;
        let newBancoAgenteAduana = await bancosAgentesAduana.create({
            numero_cuenta, 
            tipo_cuenta, 
            nombre_banco,
            vigencia: true
        },{
            fields: [
                'numero_cuenta', 
                'tipo_cuenta', 
                'nombre_banco',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Banco de agente de aduana creado correctamente",
            bancosAgentesAduana: newBancoAgenteAduana
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            bancosAgentesAduana: null
        });
    };
};


export const updateBancosAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const bancoAgenteAduanaUpdate = await bancosAgentesAduana.update({
            body
        },
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Banco de agente de aduana actualizado correctamente',
            resultado: true,
            bancosAgentesAduana: bancoAgenteAduanaUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            bancosAgentesAduana: null
        });
    }
};

export const deleteBancosAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        const bancoAgentesAduana = await bancosAgentesAduana.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'numero_cuenta', 
                'tipo_cuenta', 
                'nombre_banco'
            ],
            include:[
                agentes_aduana
            ]
        });
        if(bancoAgentesAduana){
            
            let agentesAduanaIds = [];
            bancoAgentesAduana.dataValues.agentesAduana.forEach(element => {
                agentesAduanaIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
                id : agentesAduanaIds
            };
            let aux = await agentesAduanaController.deleteAgentesAduana(req, res);
            let bancoAgenteAduanaUpdate;
            aux.resultado ? bancoAgenteAduanaUpdate = await bancoAgentesAduana.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });



        }
        res.json({
            resultado: true, 
            message: 'Banco de agente de aduana eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllBancosAgentesAduana = async (req, res) => {
    try{
        const allBancosAgentesAduana = await bancosAgentesAduana.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'numero_cuenta', 
                'tipo_cuenta', 
                'nombre_banco'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            bancosAgentesAduana: allBancosAgentesAduana
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            bancosAgentesAduana: null
        });
    };
};

export const getBancosAgentesAduanaId = async (req, res) => {
    try{
        const {id} = req.params;
        const bancoAgentesAduana = await bancosAgentesAduana.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'numero_cuenta', 
                'tipo_cuenta', 
                'nombre_banco'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            bancosAgentesAduana: bancoAgentesAduana
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            bancosAgentesAduana: null
        });
    };
};

export const getAllBancosAgentesAduanaWithFalse = async (req, res) => {
    try{
        const allBancosAgentesAduana = await bancosAgentesAduana.findAll({
            attributes: [
                'id',
                'numero_cuenta', 
                'tipo_cuenta', 
                'nombre_banco'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            bancosAgentesAduana: allBancosAgentesAduana
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            bancosAgentesAduana: null
        });
    };
};