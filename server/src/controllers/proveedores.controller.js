import proveedores from '../models/proveedores';

export const createProveedores = async (req, res) => {
    try{
        const {nombre, direccion, correo, pais, monedas_id, rut} = req.body;
        let newProveedor = await proveedores.create({
            nombre,
            direccion,
            correo,
            pais,
            monedas_id,
            rut
        },{
            fields: [
                'nombre',
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut'
            ]
        });
        res.json({
            resultado: true,
            message: "Proveedor creado correctamente",
            proveedores: newProveedor
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, por favor contactese con el administrador", 
            resultado: false, 
            proveedores: null
        });
    };
};


export const updateProveedores = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const proveedorUpdate = await proveedores.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Proveedor actualizado',
            resultado: true,
            proveedores: proveedorUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            proveedores: null
        });
    }
};

export const deleteProveedores = async (req, res) => {
    try{
        const {id} = req.params;
        await proveedores.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Proveedor eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllProveedores = async (req, res) => {
    try{
        const allProveedores = await proveedores.findAll({
            attributes: [
                'id', 
                'nombre', 
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            proveedores: allProveedores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            proveedores: null
        });
    };
};

export const getProveedoresId = async (req, res) => {
    try{
        const {id} = req.params;
        const proveedor = await proveedores.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'nombre', 
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            proveedores: proveedor
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            proveedores: null
        });
    };
};