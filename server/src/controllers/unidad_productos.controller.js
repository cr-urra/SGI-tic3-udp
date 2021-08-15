import unidadProductos from '../models/unidad_productos';
import productos from '../models/productos';
import * as productosController from './productos.controller';

export const createUnidadProductos = async (req, res) => {
    try{
        const {valor_unidad, nombre_medida} = req.body;
        let newUnidadProducto = await unidadProductos.create({            
            valor_unidad,
            nombre_medida,
            vigencia: true
        },{
            fields: [                 
                'valor_unidad',
                'nombre_medida',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Unidad de producto creada correctamente",
            unidadProductos: newUnidadProducto
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            unidadProductos: null
        });
    };
};


export const updateUnidadProductos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const unidadProductosUpdate = await unidadProductos.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Unidad de producto actualizada correctamente',
            resultado: true,
            unidadProductos: unidadProductosUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            unidadProductos: null
        });
    }
};

export const deleteUnidadProductos = async (req, res) => {
    try{
        const {id} = req.params;
        const unidadProducto = await unidadProductos.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre_medida',
                'valor_unidad'
            ],
            include:[
                productos
            ]
        });
        if(unidadProducto){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            };
            unidadProducto.dataValues.productos.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.id)
                };
                if(aux.resultado) aux = await productosController.deleteProductos(req, res);
                else if (aux.resultado == false && body.cascade == true) return {
                    resultado: false
                }
                else res.json({
                    message: 'Ha ocurrido un error, porfavor contactese con el administrador',
                    resultado: false
                });
            });
            let unidadProductosUpdate;
            aux.resultado ? unidadProductosUpdate = await unidadProductos.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            res.json({
                resultado: true, 
                message: 'Unidad de producto eliminada correctamente'
            });
        } else {
            res.json({
                message: 'Unidad de producto no encontrada',
                resultado: true
            });
        };
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    };
    
};

export const getAllUnidadProductos = async (req, res) => {
    try{
        const allUnidadProductos = await unidadProductos.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'nombre_medida',
                'valor_unidad'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            unidadProductos: allUnidadProductos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            unidadProductos: null
        });
    };
};

export const getUnidadProductosId = async (req, res) => {
    try{
        const {id} = req.params;
        const unidadProducto = await unidadProductos.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'nombre_medida',
                'valor_unidad'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            unidadProductos: unidadProducto
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            unidadProductos: null
        });
    };
};

export const getAllUnidadProductosWithFalse = async (req, res) => {
    try{
        const allUnidadProductos = await unidadProductos.findAll({
            attributes: [
                'id',
                'nombre_medida',
                'valor_unidad'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            unidadProductos: allUnidadProductos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            unidadProductos: null
        });
    };
};