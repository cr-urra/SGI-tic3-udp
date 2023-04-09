import extrae from '../models/extrae.model';

export const createExtrae = async (req, res) => {
    try{
        const {pedidos_id, historial_precios_id} = req.body;
        let newextrae = await extrae.create({
            pedidos_id, 
            historial_precios_id
        },{
            fields: [
                'pedidos_id', 
                'historial_precios_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Relación extrae creada correctamente",
            extrae: newextrae
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            extrae: null
        });
    };
};

export const deleteExtraePedidos = async (req, res) => {
    try{
        const {id} = req.params;
        await extrae.destroy({
            where: {
                pedidos_id: id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación extrae eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const deleteExtraeHistorialPrecios = async (req, res) => {
    try{
        const {id} = req.params;
        await extrae.destroy({
            where: {
                historial_precios_id: id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación extrae eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};