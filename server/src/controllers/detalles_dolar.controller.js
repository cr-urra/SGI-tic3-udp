import detallesDolar from '../models/detalles_dolar.model';

export const createDetallesDolar = async (req, res) => {
    try{
        const {precio_compra, historial_dolar_id} = req.body;
        let newDetalleDolar = await detallesDolar.create({
            precio_compra, 
            historial_dolar_id,
            vigencia: true
        },{
            fields: [
                'precio_compra', 
                'historial_dolar_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Detalle de dólar creado correctamente",
            detallesDolar: newDetalleDolar
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            detallesDolar: null
        });
    };
};


export const updateDetallesDolar = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const detalleDolarUpdate = await detallesDolar.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Detalle de dólar actualizado correctamente',
            resultado: true,
            detallesDolar: detalleDolarUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            detallesDolar: null
        });
    }
};

export const deleteDetallesDolar = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const params = req.params;
        const detalleDolar = await detallesDolar.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'precio_compra', 
                'historial_dolar_id'
            ]
        });
        if(detalleDolar){
            const detalleDolarUpdate = await detallesDolar.update({
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
                message: 'Detalle de dólar eliminado correctamente'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Detalle de dólar no encontrado'
            });
        }
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

export const getAllDetallesDolar = async (req, res) => {
    try{
        const allDetallesDolar = await detallesDolar.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'precio_compra', 
                'historial_dolar_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            detallesDolar: allDetallesDolar
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            detallesDolar: null
        });
    };
};

export const getDetallesDolarId = async (req, res) => {
    try{
        const {id} = req.params;
        const detalleDolar = await detallesDolar.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'precio_compra', 
                'historial_dolar_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            detallesDolar: detalleDolar
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            detallesDolar: null
        });
    };
};

export const getAllDetallesDolarWithFalse = async (req, res) => {
    try{
        const allDetallesDolar = await detallesDolar.findAll({
            attributes: [
                'id',
                'precio_compra', 
                'historial_dolar_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            detallesDolar: allDetallesDolar
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            detallesDolar: null
        });
    };
};