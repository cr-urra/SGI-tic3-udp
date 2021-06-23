import detallesDolar from '../models/detalles_dolar';

export const createDetallesDolar = async (req, res) => {
    try{
        const {precio_compra, historial_dolar_id} = req.body;
        let newDetalleDolar = await detallesDolar.create({
            precio_compra, 
            historial_dolar_id
        },{
            fields: [
                'precio_compra', 
                'historial_dolar_id'
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
        const detalleDolarUpdate = await detallesDolar.update({
            body
        },
        {
            where: {id}
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
    try{
        const {id} = req.params;
        await detallesDolar.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Detalle de dólar eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllDetallesDolar = async (req, res) => {
    try{
        const allDetallesDolar = await detallesDolar.findAll({
            attributes: [
                'id',
                'ip', 
                'usuarios_id'
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
        const detallesDolar = await detallesDolar.findOne({
            where: {
                id
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
            detallesDolar: detallesDolar
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