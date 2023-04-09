import movimientos from '../models/movimientos.model';
import sequelize from 'sequelize';

export const createMovimientos = async (req, res) => {
    try{
        const {monto, cuentas_corrientes_id, descripcion} = req.body;
        let newMovimiento = await movimientos.create({
            monto, 
            fecha: sequelize.literal('CURRENT_TIMESTAMP'), 
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
        const movimientoUpdate = await movimientos.update(
            body
        ,
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
    const body = req.body;
    try{
        const {id} = req.params;
        const movimiento = await movimientos.findAll({
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
            if(body.cascade) return {
                resultado: true
            };
            else res.json({
                resultado: true, 
                message: 'Movimiento eliminado correctamente'
            });
        } else {
            if (body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Movimiento no encontrado'
            });
        };
    }catch(e){
        console.log(e);
        if(body.cascade) return {
            resultado: false
        }
        else res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
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