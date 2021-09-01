import usuarios from '../models/usuarios';
import ips from '../models/ips';
import telefonoUsuarios from '../models/telefonos_usuarios';
import * as ct from './telefonos_usuarios.controller';
import * as ipsc from './ips.controller';

export const updateUsuarios = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const userUpdate = await usuarios.update(
            body
        ,
        {
            where: {
                id
            }
        });
        res.json({
            message: 'Usuario actualizado correctamente',
            resultado: true,
            usuarios: userUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: true,
            usuarios: null
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
                ips,
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
            console.log("aqui");
            user.dataValues.ips.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = aux = await ipsc.deleteIps(req, res)
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
        const allUsers = await usuarios.findAll({
            attributes: [
                'id', 
                'rut', 
                'nombre', 
                'apellido', 
                'roles_id', 
                'contraseña', 
                'correo', 
                'verificacion'
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
            usuarios: allUsers
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