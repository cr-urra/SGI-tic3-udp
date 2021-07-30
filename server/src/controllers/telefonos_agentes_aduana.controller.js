import telefonosAgentesAduana from '../models/telefonos_agentes_aduana';

export const createTelefonosAgentesAduana = async (req, res) => {
    try{
        const {telefono, agentes_aduana_id} = req.body;
        let newTelefonoUsuario = await telefonosAgentesAduana.create({
            telefono,
            agentes_aduana_id,
            vigencia: true
        },{
            fields: [
                'telefono',
                'agentes_aduana_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Telefono de agente de aduana creado correctamente",
            telefono: newTelefonoUsuario
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, por favor contactese con el administrador", 
            resultado: false, 
            telefono: null
        });
    };
};

export const updateTelefonosAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const telefonoUpdate = await telefonosAgentesAduana.update(
            body
        ,
        {
            where: {
                agentes_aduana_id: id,
                vigencia: true
            }
        });
        res.json({
            message: 'Teléfono de agente de aduana actualizado correctamente',
            resultado: true,
            telefonos: telefonoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: true,
            telefonos: null
        });
    };
};

export const deleteTelefonosAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        const telefono = await telefonosAgentesAduana.findOne({
            where: {
                agentes_aduana_id: id
            },
            attributes: [
                'id', 
                'telefono', 
                'agentes_aduana_id'
            ]
        });
        if(telefono){
            const telefonoUpdate = await telefonosAgentesAduana.update({
                vigencia: false
            },
            {
                where: {
                    agentes_aduana_id: id,
                    vigencia: true
                }
            });
        }
        if(req.body.cascade) return {
            message: 'Teléfono de agente de aduana eliminado correctamente',
            resultado: true
        }
        else res.json({
            message: 'Teléfono de agente de aduana eliminado correctamente',
            resultado: true
        });
    }catch(e){
        console.log(e);
        if(req.body.cascade) return {
            resultado: false
        }
        else res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    };
};

export const getTelefonosAgentesAduanaId = async (req, res) => {
    try{
        const {id} = req.params;
        const telefono = await telefonosAgentesAduana.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true,
            message: "",
            telefono: telefono
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            telefono: null
        });
    }
};

export const getAllTelefonosAgentesAduanaWithFalse = async (req, res) => {
    try{
        const allTelefonos = await telefonosAgentesAduana.findAll({
            attributes: [
                'id', 
                'telefono', 
                'agentes_aduana_id'
            ],
            order: [
                [
                    'id', 
                    'DESC'
                ]
            ]
        });
        res.json({
            resultado: true,
            message: "",
            telefonos: allTelefonos
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            telefonos: null
        });
    }
};


export const getAllTelefonosAgentesAduana = async (req, res) => {
    try{
        const allTelefonos = await telefonosAgentesAduana.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'agentes_aduana_id'
            ],
            order: [
                [
                    'id', 
                    'DESC'
                ]
            ]
        });
        res.json({
            resultado: true,
            message: "",
            telefonos: allTelefonos
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            telefonos: null
        });
    }
};

export const getTelefonosAgentesAduanaForAgentesId = async (req, res) => {
    try{
        const {id} = req.params;
        const telefonos = await telefonosAgentesAduana.findAll({
            where: {
                agentes_aduana_id: id,
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true,
            message: "",
            telefono: telefonos
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            telefono: null
        });
    }
};