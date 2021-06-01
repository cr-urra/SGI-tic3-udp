import roles from '../models/roles';

export const createRoles = async (req, res) => {
    try{
        const {cod_rol, nombre} = req.body;
        let newRol = await roles.create({
            cod_rol,
            nombre,
        },{
            fields: [
                'cod_rol',
                'nombre'
            ]
        });
        res.json({
            resultado: true,
            message: "Rol creado correctamente",
            roles: newRol
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            roles: null
        });
    };
};


export const updateRoles = async (req, res) => {
    try{
        const {id} = req.params;
        const {cod_rol, nombre} =  req.body;
        const rolUpdate = await roles.update({
            rut,
            cod_rol,
            nombre
        },
        {
            where: {id}
        });
        res.json({
            message: 'Rol actualizado',
            resultado: true,
            roles: rolUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            roles: null
        });
    }
};

export const deleteRoles = async (req, res) => {
    try{
        const {id} = req.params;
        await usuarios.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Usuario eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllRoles = async (req, res) => {
    try{
        const allRoles = await roles.findAll({
            attributes: [
                'id', 
                'cod_rol', 
                'nombre'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            roles: allRoles
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            roles: null
        });
    };
};

export const getRolesId = async (req, res) => {
    try{
        const {id} = req.params;
        const roles = await roles.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'nombre', 
                'cod_rol'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            roles: roles
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            roles: null
        });
    };
};