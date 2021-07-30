import telefonosUsuarios from '../models/telefonos_usuarios';

export const createTelefonosUsuarios = async (req, res) => {
    try{
        const {telefono, usuarios_id} = req.body;
        let newTelefonoUsuario = await telefonosUsuarios.create({
            telefono,
            usuarios_id
        },{
            fields: [
                'telefono',
                'usuarios_id',
            ]
        });
        res.json({
            resultado: true,
            message: "Telefono de usuario creado correctamente",
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

export const updateTelefonosUsuarios = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const telefonoUpdate = await telefonosUsuarios.update(
            body
        ,
        {
            where: {
                usuarios_id: id
            }
        });
        res.json({
            message: 'Teléfono de usuario actualizado correctamente',
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

export const deleteTelefonosUsuarios = async (req, res) => {
    try{
        const {id} = req.params;
        await telefonosUsuarios.destroy({
            where: {
                usuarios_id: id
            }
        });
        if(req.body.cascade){
            return {
                message: 'Teléfono de usuario eliminado correctamente',
                resultado: true
            }
        }else{
            res.json({
                message: 'Teléfono de usuario eliminado correctamente',
                resultado: true
            });
        };
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

export const getTelefonosUsuariosId = async (req, res) => {
    try{
        const {id} = req.params;
        const telefono = await telefonosUsuarios.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'telefono', 
                'usuarios_id'
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

export const getTelefonosUsuariosIdForUsuariosId = async (req, res) => {
    try{
        const {id} = req.params;
        const telefono = await telefonosUsuarios.findOne({
            where: {
                usuarios_id: id
            },
            attributes: [
                'id', 
                'telefono', 
                'usuarios_id'
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

export const getAllTelefonosUsuarios = async (req, res) => {
    try{
        const allTelefonos = await telefonosUsuarios.findAll({
            attributes: [
                'id', 
                'telefono', 
                'usuarios_id'
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
