import movimientos from '../models/movimientos';

export const createMovimientos = async (req, res) => {
    try{
        const {monto, fecha, cuentas_corrientes_id, descripcion} = req.body;
        let newMovimiento = await movimientos.create({
            monto, 
            fecha, 
            cuentas_corrientes_id, 
            descripcion
        },{
            fields: [
                'monto', 
                'fecha', 
                'cuentas_corrientes_id', 
                'descripcion'
            ]
        });
        res.json({
            resultado: true,
            message: "Movimiento creado correctamente",
            movimientos: newMovimiento 
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            movimientos: null
        });
    };
};


export const updateMovimientos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const movimientoUpdate = await movimientos.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Movimiento actualizado',
            resultado: true,
            movimientos: movimientoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            movimientos: null
        });
    }
};

export const deleteMovimientos = async (req, res) => {
    try{
        const {id} = req.params;
        await movimientos.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Movimiento eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllMovimientos = async (req, res) => {
    try{
        const allmovimientos = await movimientos.findAll({
            attributes: [
                'id',
                'monto', 
                'fecha', 
                'cuentas_corrientes_id', 
                'descripcion'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            movimientos: allmovimientos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            movimientos: null
        });
    };
};

export const getMovimientosId = async (req, res) => {
    try{
        const {id} = req.params;
        const movimientos = await movimientos.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'monto', 
                'fecha', 
                'cuentas_corrientes_id', 
                'descripcion'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            movimientos: movimientos
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            movimientos: null
        });
    };
};