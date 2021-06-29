import ips from '../models/ips';

export const createIps = async (req, res) => {
    try{
        const {ip, usuarios_id} = req.body;
        let newIp = await ips.create({
            ip, 
            usuarios_id,
            vigencia: true
        },{
            fields: [
                'ip', 
                'usuarios_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Ip creada correctamente",
            ips: newIp
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            ips: null
        });
    };
};


export const updateIps = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const ipUpdate = await ips.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Ip actualizada correctamente',
            resultado: true,
            ips: ipUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            ips: null
        });
    }
};

export const deleteIps = async (req, res) => {
    try{
        const {id} = req.params;
        await ips.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Ip eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllIps = async (req, res) => {
    try{
        const allIps = await ips.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'ip', 
                'usuarios_id',
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            ips: allIps
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            ips: null
        });
    };
};

export const getIpsId = async (req, res) => {
    try{
        const {id} = req.params;
        const ip = await ips.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'ip', 
                'usuarios_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            ips: ip
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            ips: null
        });
    };
};

export const getAllIpsWithFalse = async (req, res) => {
    try{
        const allIps = await ips.findAll({
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
            ips: allIps
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            ips: null
        });
    };
};