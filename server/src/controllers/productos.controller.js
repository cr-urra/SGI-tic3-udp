import productos from '../models/productos';
import historial_precios from '../models/historial_precios';
import pedidos from '../models/pedidos';
import * as historialPreciosController from './historial_precios.controller';

export const createProductos = async (req, res) => {
    try{
        const {codigo, nombre, tipo, proveedores_id, unidad_productos_id} = req.body;
        let newProducto = await productos.create({
            codigo,
            nombre,
            tipo,
            proveedores_id,
            unidad_productos_id,
            vigencia: true
        },{
            fields: [
                'codigo',
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id',
                'unidad_productos_id',
                'vigencia'
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
        const productoUpdate = await productos.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
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
            ],
            include: [
                historial_precios,
                pedidos
            ]
        });

        if(producto){

            let historialPreciosIds = [];
            let pedidosIds = [];
            producto.dataValues.historial_precios.forEach(element => {
                historialPreciosIds.push(parseInt(element.dataValues.id));
            });

            pedidosIds = producto.dataValues.pedidos.forEach(element => {
                pedidosIds.push(parseInt(element.dataValues.id));
            });

            const findedPedidos = pedidos.findAll({
                where: {
                    id: pedidosIds
                },
                attributes: [
                    'id'
                ]
            });

            req.params = {
                id: historialPreciosIds
            };
            
            let aux = await historialPreciosController.deleteHistorialPrecios(req, res);

            aux.resultado ? await producto.removePedidos([findedPedidos]) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

            let productoUpdate;
            aux.resultado ? productoUpdate = await productos.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }): res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
        }

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
            where: {
                vigencia: true
            },
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
                id,
                vigencia: true
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

export const getAllProductosWithFalse = async (req, res) => {
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