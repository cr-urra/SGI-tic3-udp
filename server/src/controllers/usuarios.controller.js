import usuarios from '../models/usuarios';
import telefonoUsuarios from '../models/telefonos_usuarios';
import * as ct from './telefonos_usuarios.controller';
import * as authController from './auth.controller';

export const updateUsuarios = async (req, res) => {
    try{
        const {id} = req.params;
        const localCsrf = req.get('X-CSRF-Token');
        const body = {
            nombre: await authController.decryptData(req.body.nombre, localCsrf),
            apellido: await authController.decryptData(req.body.apellido, localCsrf),
            rut: await authController.decryptData(req.body.rut, localCsrf),
            correo: await authController.decryptData(req.body.correo, localCsrf),
            roles_id: await authController.decryptData(req.body.roles_id, localCsrf)
        };
        let userUpdate = null;
        req.body.contraseña != "default" ? userUpdate = await usuarios.update({
            nombre: body.nombre,
            apellido: body.apellido,
            rut: body.rut,
            correo: body.correo,
            roles_id: body.roles_id,
            contraseña: await authController.encryptPassword(req.body.contraseña)
        },
        {
            where: {
                id
            }
        }) : userUpdate = await usuarios.update(
            body
        ,
        {
            where: {
                id
            }
        });
        res.json({
            message: 'Usuario actualizado correctamente',
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

export const deleteUsuarios = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const user = await usuarios.findOne({
            where: {
                id
            },
            attributes: [
                'id'
            ],
            include: [
                telefonoUsuarios
            ]
        });
        if(user){
            req.body = {
                cascade: true
            };
            let aux = {
                resultado: true
            };
            user.dataValues.telefonos_usuarios.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await ct.deleteTelefonosUsuarios(req, res)
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            if(aux.resultado) { 
                await usuarios.destroy({
                    where: {
                        id
                    }
                });
                res.json({
                    message: 'Usuario eliminado correctamente',
                    resultado: true
                });
            }else{
                res.json({
                    message: 'Ha ocurrido un error, porfavor contactese con el administrador',
                    resultado: false
                });
            };
        } else {
            res.json({
                message: 'Usuario no encontrado',
                resultado: false
            });
        };
    }catch(e){
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    };
};

export const getUsuariosId = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await usuarios.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'rut', 
                'nombre', 
                'apellido', 
                'roles_id',
                'correo',
                'verificacion',
                'contraseña'
            ]
        });
        res.json({
            resultado: true,
            message: "",
            usuario: user
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            usuario: null
        });
    }
};

export const getAllUsuarios = async (req, res) => {
    try{
        const localCsrf = req.get('X-CSRF-Token');
        const allUsers = await usuarios.findAll({
            attributes: [
                'id', 
                'rut', 
                'nombre', 
                'apellido', 
                'roles_id', 
                'correo'
            ],
            order: [
                [
                    'id', 
                    'DESC'
                ]
            ]
        });
        let encryptAllUsers = [];
        const len = allUsers.length;
        for(let i = 0; i < len; i++) {
            let id = await authController.encryptData(allUsers[i].dataValues.id.toString(), localCsrf);
            let rut = await authController.encryptData(allUsers[i].dataValues.rut, localCsrf);
            let nombre = await authController.encryptData(allUsers[i].dataValues.nombre, localCsrf);
            let apellido = await authController.encryptData(allUsers[i].dataValues.apellido, localCsrf);
            let roles_id = await authController.encryptData(allUsers[i].dataValues.roles_id.toString(), localCsrf);
            let correo = await authController.encryptData(allUsers[i].dataValues.correo, localCsrf);
            let obj = {
                id: id, 
                rut: rut, 
                nombre: nombre, 
                apellido: apellido, 
                roles_id: roles_id, 
                correo: correo               
            };
            encryptAllUsers.push(obj);
        };
        res.json({
            resultado: true,
            message: "",
            usuarios: encryptAllUsers
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            usuarios: false
        });
    }
};