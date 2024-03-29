import telefonosProveedores from '../models/telefonos_proveedores.model';

export const createTelefonosProveedores = async (req, res) => {
    try{
        const {telefono, proveedores_id} = req.body;
        let newTelefonoProveedor = await telefonosProveedores.create({
            telefono,
            proveedores_id,
            vigencia: true
        },{
            fields: [
                'telefono',
                'proveedores_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Telefono de proveedor creado correctamente",
            telefono: newTelefonoProveedor
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

export const updateTelefonosProveedores = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const telefonoUpdate = await telefonosProveedores.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Teléfono de proveedor actualizado correctamente',
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

export const deleteTelefonosProveedores = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const telefono = await telefonosProveedores.findAll({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'proveedores_id'
            ]
        });
        if(telefono){
            const telefonoUpdate = await telefonosProveedores.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            });
            if(body.cascade) return {
                resultado: true
            };
            else res.json({
                message: 'Teléfono de proveedor eliminado correctamente',
                resultado: true
            });
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                message: 'Teléfono de proveedor no encontrado',
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

export const getTelefonosProveedoresId = async (req, res) => {
    try{
        const {id} = req.params;
        const telefono = await telefonosProveedores.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'proveedores_id'
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

export const getTelefonosProveedoresForProveedoresId = async (req, res) => {
    try{
        const {id} = req.params;
        const telefono = await telefonosProveedores.findOne({
            where: {
                proveedores_id: id,
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'proveedores_id'
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

export const getAllTelefonosProveedores = async (req, res) => {
    try{
        const allTelefonos = await telefonosProveedores.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id', 
                'telefono', 
                'proveedores_id'
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

export const getAllTelefonosProveedoresWithFalse = async (req, res) => {
    try{
        const allTelefonos = await telefonosProveedores.findAll({
            attributes: [
                'id', 
                'telefono', 
                'proveedores_id'
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