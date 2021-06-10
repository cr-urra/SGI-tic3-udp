import detallesPedidos from '../models/detalles_pedidos';

export const createDetallesPedidos = async (req, res) => {
    try{
        const {diferencia_de_costos, pedidos_id} = req.body;
        let newDetallePedido = await detallesPedidos.create({
            diferencia_de_costos, 
            pedidos_id
        },{
            fields: [
                'diferencia_de_costos', 
                'pedidos_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Detalles de pedido creado correctamente",
            detallesPedidos: newDetallePedido
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            detallesPedidos: null
        });
    };
};


export const updateDetallesPedidos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const detallePedidoUpdate = await detallesPedidos.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Detalles de pedido actualizado correctamente',
            resultado: true,
            detallesPedidos: detallePedidoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            detallesPedidos: null
        });
    }
};

export const deleteDetallesPedidos = async (req, res) => {
    try{
        const {id} = req.params;
        await detallesPedidos.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Detalles de pedido eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllDetallesPedidos = async (req, res) => {
    try{
        const allDetallesPedidos = await detallesPedidos.findAll({
            attributes: [
                'id',
                'diferencia_de_costos', 
                'pedidos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            detallesPedidos: allDetallesPedidos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            detallesPedidos: null
        });
    };
};

export const getDetallesPedidosId = async (req, res) => {
    try{
        const {id} = req.params;
        const detallesPedidos = await detallesPedidos.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'diferencia_de_costos', 
                'pedidos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            detallesPedidos: detallesPedidos
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            detallesPedidos: null
        });
    };
};