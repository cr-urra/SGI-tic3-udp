import telefonosUsuarios from '../models/telefonos_usuarios.model';
import * as authController from './auth.controller';

export const createTelefonosUsuarios = async (req, res) => {
    try{
        const localCsrf = req.get('X-CSRF-Token');
        const telefono = await authController.decryptData(req.body.telefono, localCsrf);
        const usuarios_id = await authController.decryptData(req.body.usuarios_id, localCsrf);
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
            message: "Telefono de usuario creado correctamente"
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
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
    const body = req.body;
    try{
        const {id} = req.params;
        await telefonosUsuarios.destroy({
            where: {
                id
            }
        });
        if(body.cascade){
            return {
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
        if(body.cascade) return {
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
        const {usuarios_id} = req.params;
        const localCsrf = req.get('X-CSRF-Token');
        const telefono = await telefonosUsuarios.findOne({
            where: {
                usuarios_id: usuarios_id
            },
            attributes: [
                'id', 
                'telefono', 
                'usuarios_id'
            ]
        });
        const id = await authController.encryptData(telefono.dataValues.id.toString(), localCsrf);
        const tel = await authController.encryptData(telefono.dataValues.telefono, localCsrf);
        const telefonoEncrypt = {
            telefono: tel,
            id: id
        };
        res.json({
            resultado: true,
            message: "",
            telefono: telefonoEncrypt
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
