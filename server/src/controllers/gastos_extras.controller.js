import gastosExtras from '../models/gastos_extras';

export const createGastosExtras = async (req, res) => {
    try{
        const {monto, pedidos_id, observaciones_id} = req.body;
        let newGastoExtra = await gastosExtras.create({
            monto, 
            pedidos_id, 
            observaciones_id,
            vigencia: true
        },{
            fields: [
                'monto', 
                'pedidos_id', 
                'observaciones_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Gasto extra creado correctamente",
            gastosExtras: newGastoExtra
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            gastosExtras: null
        });
    };
};


export const updateGastosExtras = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const gastoExtraUpdate = await gastosExtras.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Gasto extra actualizado correctamente',
            resultado: true,
            gastosExtras: gastoExtraUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            gastosExtras: null
        });
    }
};

export const deleteGastosExtras = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const gastoExtra = await gastosExtras.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'monto', 
                'pedidos_id', 
                'observaciones_id'
            ]
        });
        if(gastoExtra){
            const gastoExtraUpdate = await gastosExtras.update({
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
                message: 'Gasto extra eliminado correctamente'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Gasto extra no encontrado'
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

export const getAllGastosExtras = async (req, res) => {
    try{
        const allGastosExtras = await gastosExtras.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'monto', 
                'pedidos_id', 
                'observaciones_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            gastosExtras: allGastosExtras
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            gastosExtras: null
        });
    };
};

export const getGastosExtrasId = async (req, res) => {
    try{
        const {id} = req.params;
        const gastoExtra = await gastosExtras.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'monto', 
                'pedidos_id', 
                'observaciones_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            gastosExtras: gastoExtra
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            gastosExtras: null
        });
    };
};

export const getAllGastosExtrasWithFalse = async (req, res) => {
    try{
        const allGastosExtras = await gastosExtras.findAll({
            attributes: [
                'id',
                'monto', 
                'pedidos_id', 
                'observaciones_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            gastosExtras: allGastosExtras
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            gastosExtras: null
        });
    };
};