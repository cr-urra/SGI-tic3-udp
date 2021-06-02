import productos from '../models/productos';

export const createProductos = async (req, res) => {
    try{
        const {codigo, nombre, precio_por_kg, tipo, proveedores_id} = req.body;
        let newProducto = await productos.create({
            codigo,
            nombre,
            precio_por_kg,
            tipo,
            proveedores_id
        },{
            fields: [
                'codigo',
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Producto creado correctamente",
            productos: newProducto 
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            productos: null
        });
    };
};


export const updateProductos = async (req, res) => {
    try{
        const {id} = req.params;
        const {codigo, nombre, precio_por_kg, tipo, proveedores_id} =  req.body;
        const productoUpdate = await productos.update({
            codigo,
            nombre,
            precio_por_kg,
            tipo,
            proveedores_id
        },
        {
            where: {id}
        });
        res.json({
            message: 'Producto actualizado',
            resultado: true,
            productos: productoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            productos: null
        });
    }
};

export const deleteProductos = async (req, res) => {
    try{
        const {id} = req.params;
        await productos.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Producto eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllProductos = async (req, res) => {
    try{
        const allProductos = await productos.findAll({
            attributes: [
                'id', 
                'codigo', 
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            productos: allProductos
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

export const getProductosId = async (req, res) => {
    try{
        const {id} = req.params;
        const productos = await productos.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'codigo', 
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            productos: productos
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