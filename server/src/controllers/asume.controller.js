import asume from '../models/asume.model';

export const createAsume = async (req, res) => {
    try{
        const {agentes_aduana_id, observadores_id} = req.body;
        let newAsume = await asume.create({
            agentes_aduana_id, 
            observadores_id
        },{
            fields: [
                'agentes_aduana_id', 
                'observadores_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Relación asume creada correctamente",
            asume: newAsume
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            asume: null
        });
    };
};

export const deleteAsumeObservadores = async (req, res) => {
    try{
        const {id} = req.params;
        await asume.destroy({
            where: {
                observadores_id: id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación asume eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const deleteAsumeAgentesAduana = async (req, res) => {
    try{
        const {id} = req.params;
        await asume.destroy({
            where: {
                agentes_aduana_id: id
            }
        });
        res.json({
            resultado: true, 
            message: 'Relación asume eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};