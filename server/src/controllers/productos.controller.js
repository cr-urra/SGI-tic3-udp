import productos from '../models/productos';

export const createProductos = async (req, res) => {
    try{
        const {codigo, nombre, tipo, proveedores_id, unidad_productos_id} = req.body;
        let newProducto = await productos.create({
            codigo,
            nombre,
            tipo,
            proveedores_id,
            unidad_productos_id
        },{
            fields: [
                'codigo',
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id',
                'unidad_productos_id'
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
        const body =  req.body;
        const productoUpdate = await productos.update({
            body
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
                'tipo',
                'proveedores_id',
                'unidad_productos_id'
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
            productos: null
        });
    };
};

export const getProductosId = async (req, res) => {
    try{
        const {id} = req.params;
        const producto = await productos.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'codigo', 
                'nombre',
                'tipo',
                'proveedores_id',
                'unidad_productos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            productos: producto
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            productos: null
        });
    };
};