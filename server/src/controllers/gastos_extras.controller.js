import gastosExtras from '../models/gastos_extras';

export const createGastosExtras = async (req, res) => {
    try{
        const {monto, pedidos_id, observaciones_id} = req.body;
        let newGastoExtra = await gastosExtras.create({
            monto, 
            pedidos_id, 
            observaciones_id
        },{
            fields: [
                'monto', 
                'pedidos_id', 
                'observaciones_id'
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
        const gastoExtraUpdate = await gastosExtras.update({
            body
        },
        {
            where: {id}
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
    try{
        const {id} = req.params;
        await gastosExtras.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Gasto extra eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllGastosExtras = async (req, res) => {
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

export const getGastosExtrasId = async (req, res) => {
    try{
        const {id} = req.params;
        const gastosExtras = await gastosExtras.findOne({
            where: {
                id
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
            gastosExtras: gastosExtras
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