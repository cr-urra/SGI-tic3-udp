import historialPrecios from '../models/historial_precios';
import sequelize from 'sequelize';

export const createHistorialPrecios = async (req, res) => {
    try{
        const {precio, productos_id} = req.body;
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
        const historialPreciosUpdate = await historialPrecios.update(
            body
        ,
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
    const body = req.body;
    try{
        const {id} = req.params;
        const historialPrecio = await historialPrecios.findAll({
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
            if(body.cascade) return {
                resultado: true
            }
            else res.json({
                resultado: true, 
                message: 'Precio de historial eliminado correctamente'
            }); 
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Precio en historial no encontrado'
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

export const getAllHistorialPrecios = async (req, res) => {
    try{
        const {id} = req.params;
        const allHistorialPrecios = await historialPrecios.findAll({
            where: {
                productos_id: id,
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
        let arr = [];
        allHistorialPrecios.dataValues.forEach(element =>{
            arr.push(element.precio);
        });
        res.json({
            resultado: true, 
            message: "",
            historialPrecios: arr
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

export const getHistorialPreciosMaxDate = async (req, res) => {
    try{
        const {id} = req.params;
        const maxHistorialPrecios = await historialPrecios.findAll({
            where: {
                vigencia: true,
                productos_id: id
            },
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ]
        });
        let datesPrecios = [];
        let producto = null;
        maxHistorialPrecios.forEach(element => {
            datesPrecios.push(element.dataValues.fecha);
        });
        const maxDate = new Date(Math.max.apply(null,datesPrecios));
        maxHistorialPrecios.forEach(element => {
            if(String(element.dataValues.fecha) == String(maxDate)){
                producto = element.dataValues;
            }
        });
        res.json({
            resultado: true, 
            message: "",
            historialPrecios: producto
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

export const getHistorialPreciosBetweenDates = async (req, res) => {
    try{
        const op = sequelize.Op;
        let id = req.body.Producto.id;
        let minDate = req.body.fecha1;
        let maxDate = req.body.fecha2;
        if (minDate == null) minDate = new Date(0,0,0);
        let lastYear = new Date().getFullYear()+1;
        if (maxDate == null) maxDate = new Date(lastYear,11,11);
        const maxHistorialPrecios = await historialPrecios.findAll({
            where: {
                vigencia: true,
                productos_id: id
            },
            attributes: [
                'id',
                'precio', 
                'fecha', 
                'productos_id'
            ]
        });
        const filter = maxHistorialPrecios.filter((element) => {return element.dataValues.fecha <= new Date(maxDate) && element.dataValues.fecha >= new Date(minDate)})
        res.json({
            resultado: true, 
            message: "",
            historialPrecios: filter
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