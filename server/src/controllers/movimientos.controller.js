import movimientos from '../models/movimientos';

export const createMovimientos = async (req, res) => {
    try{
        const {monto, fecha, cuentas_corrientes_id, descripcion} = req.body;
        let newMovimiento = await movimientos.create({
            monto, 
            fecha, 
            cuentas_corrientes_id, 
            descripcion,
            vigencia: true
        },{
            fields: [
                'monto', 
                'fecha', 
                'cuentas_corrientes_id', 
                'descripcion',
                'vigencia'
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
            where: {
                id,
                vigencia: true
            }
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
        const movimiento = await movimientos.findOne({
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
        if(movimiento){
            const movimientoUpdate = await movimientos.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            });
        }
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

export const getAllMovimientosWithFalse = async (req, res) => {
    try{
        const allMovimientos = await movimientos.findAll({
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
            movimientos: allMovimientos
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
        const movimiento = await movimientos.findOne({
            where: {
                id,
                vigencia: true
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
            movimientos: movimiento
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

export const getAllMovimientos = async (req, res) => {
    try{
        const allMovimientos = await movimientos.findAll({
            where: {
                vigencia: true
            },
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
            movimientos: allMovimientos
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