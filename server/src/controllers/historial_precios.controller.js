import historialPrecios from '../models/historial_precios';
import sequelize from 'sequelize';

export const createHistorialPrecios = async (req, res) => {
    try{
        const {precio, productos_id,fecha} = req.body;
        let newHistorialPrecios = await historialPrecios.create({
            precio, 
            productos_id,
            fecha: sequelize.literal('CURRENT_TIMESTAMP'),
            vigencia: true
        },{
            fields: [
                'precio', 
                'productos_id',
                'fecha',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Precio creado correctamente en Historial",
            historialPrecios: newHistorialPrecios
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            historialPrecios: null
        });
    };
};


export const updateHistorialPrecios = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const historialPreciosUpdate = await historialPrecios.update({
            body
        },
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Precio actualizado correctamente en historial',
            resultado: true,
            historialPrecios: historialPreciosUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            historialPrecios: null
        });
    }
};

export const deleteHistorialPrecios = async (req, res) => {
    try{
        const {id} = req.params;
        const historialPrecio = await historialPrecios.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ]
        });
        if(historialPrecio){
            const historialPreciosUpdate = await historialPrecios.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }); 
        }
       
        res.json({
            resultado: true, 
            message: 'Precio eliminado correctamente de historial'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllHistorialPrecios = async (req, res) => {
    try{
        const allHistorialPrecios = await historialPrecios.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            historialPrecios: allHistorialPrecios
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialPrecios: null
        });
    };
};

export const getHistorialPreciosId = async (req, res) => {
    try{
        const {id} = req.params;
        const historialPrecio = await historialPrecios.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            historialPrecios: historialPrecio
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialPrecios: null
        });
    };
};

export const getHistorialPreciosIdForProductosId = async (req, res) => {
    try{
        const {id} = req.params;
        const historialPrecio = await historialPrecios.findOne({
            where: {
                productos_id: id,
                vigencia: true
            },
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            historialPrecios: historialPrecio
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialPrecios: null
        });
    };
};

export const getAllHistorialPreciosWithFalse = async (req, res) => {
    try{
        const allHistorialPrecios = await historialPrecios.findAll({
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            historialPrecios: allHistorialPrecios
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            historialPrecios: null
        });
    };
};