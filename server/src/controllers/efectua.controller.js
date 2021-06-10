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


export const updateEfectua = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const efectuaUpdate = await efectua.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Relación efectua actualizada correctamente',
            resultado: true,
            efectua: efectuaUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            efectua: null
        });
    }
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

export const getAllEfectua = async (req, res) => {
    try{
        const allEfectua = await efectua.findAll({
            attributes: [
                'id',
                'observaciones_id', 
                'agentes_aduana_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            efectua: allEfectua
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            efectua: null
        });
    };
};

export const getEfectuaId = async (req, res) => {
    try{
        const {id} = req.params;
        const efectua = await efectua.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'observaciones_id', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            efectua: efectua
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            efectua: null
        });
    };
};