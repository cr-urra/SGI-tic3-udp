import efectua from '../models/efectua.model';

export const createEfectua = async (req, res) => {
    try{
        const {observaciones_id, observadores_id} = req.body;
        let newEfectua = await efectua.create({
            observaciones_id, 
            observadores_id
        },{
            fields: [
                'observaciones_id', 
                'observadores_id'
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

export const deleteEfectuaObservadores = async (req, res) => {
    try{
        const {id} = req.params;
        await efectua.destroy({
            where: {
                observadores_id: id
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

export const deleteEfectuaObservaciones = async (req, res) => {
    try{
        const {id} = req.params;
        await efectua.destroy({
            where: {
                observaciones_id: id
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