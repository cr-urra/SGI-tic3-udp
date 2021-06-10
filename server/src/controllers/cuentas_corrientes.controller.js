import cuentasCorrientes from '../models/cuentas_corrientes';

export const createCuentasCorrientes = async (req, res) => {
    try{
        const {debe, haber, agentes_aduana_id} = req.body;
        let newCuentasCorrientes = await cuentasCorrientes.create({
            debe, 
            haber, 
            agentes_aduana_id
        },{
            fields: [
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Cuenta corriente creada correctamente",
            cuentasCorrientes: newCuentasCorrientes
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            cuentasCorrientes: null
        });
    };
};


export const updateCuentasCorrientes = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const cuentasCorrientesUpdate = await cuentasCorrientes.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Cuenta corriente actualizada correctamente',
            resultado: true,
            cuentasCorrientes: cuentasCorrientesUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            cuentasCorrientes: null
        });
    }
};

export const deleteCuentasCorrientes = async (req, res) => {
    try{
        const {id} = req.params;
        await cuentasCorrientes.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Cuenta corriente eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllCuentasCorrientes = async (req, res) => {
    try{
        const allCuentasCorrientes = await cuentasCorrientes.findAll({
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            cuentasCorrientes: allCuentasCorrientes
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            cuentasCorrientes: null
        });
    };
};

export const getCuentasCorrientesId = async (req, res) => {
    try{
        const {id} = req.params;
        const cuentasCorrientes = await cuentasCorrientes.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'debe', 
                'haber', 
                'agentes_aduana_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            cuentasCorrientes: cuentasCorrientes
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            cuentasCorrientes: null
        });
    };
};