import roles from '../models/roles';

export const updateRoles = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const rolUpdate = await roles.update({
            body
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