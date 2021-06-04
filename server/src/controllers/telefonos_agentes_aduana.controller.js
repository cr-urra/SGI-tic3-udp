import telefonosAgentesAduana from '../models/telefonos_agentes_aduana';

export const createTelefonosAgentesAduana = async (req, res) => {
    try{
        const {telefono, agentes_aduana_id} = req.body;
        let newTelefonoUsuario = await telefonosAgentesAduana.create({
            telefono,
            agentes_aduana_id
        },{
            fields: [
                'telefono',
                'agentes_aduana',
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
        const telefonoUpdate = await telefonosAgentesAduana.update({
            body
        },
        {
            where: {
                id
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
        await telefonosAgentesAduana.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Teléfono de agente de aduana eliminado correctamente',
            resultado: true
        });
    }catch(e){
        console.log(e);
        res.json({
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
                id
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

export const getAllTelefonosAgentesAduana = async (req, res) => {
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