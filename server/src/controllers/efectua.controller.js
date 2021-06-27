import efectua from '../models/efectua';

export const createEfectua = async (req, res) => {
    try{
        const {observaciones_id, agentes_aduana_id} = req.body;
        let newEfectua = await efectua.create({
            observaciones_id, 
            agentes_aduana_id
        },{
            fields: [
                'observaciones_id', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Relación efectua creada correctamente",
            efectua: newEfectua
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            efectua: null
        });
    };
};

export const deleteEfectua = async (req, res) => {
    try{
        const {id} = req.params;
        await efectua.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación efectua eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};