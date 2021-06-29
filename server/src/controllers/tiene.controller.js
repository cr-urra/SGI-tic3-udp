import tiene from '../models/tiene';

export const createTiene = async (req, res) => {
    try{
        const {productos_id, pedidos_id, cantidad} = req.body;
        let newTiene = await tiene.create({
            productos_id, 
            pedidos_id,
            cantidad
        },{
            fields: [
                'productos_id', 
                'pedidos_id',
                'cantidad'
            ]
        });
        res.json({
            resultado: true,
            message: "Relación Tiene creada correctamente",
            Tiene: newTiene
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            Tiene: null
        });
    };
};

export const deleteTieneProductos = async (req, res) => {
    try{
        const {id} = req.params;
        await tiene.destroy({
            where: {
                productos_id: id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación Tiene eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const deleteTienePedidos = async (req, res) => {
    try{
        const {id} = req.params;
        await tiene.destroy({
            where: {
                pedidos_id: id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación Tiene eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};