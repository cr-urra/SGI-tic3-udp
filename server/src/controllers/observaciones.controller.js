import observaciones from '../models/observaciones';

export const createObservaciones = async (req, res) => {
    try{
        const {observacion, fecha, gasto, pedidos_id} = req.body;
        let newObservacion = await observaciones.create({
            observacion, 
            fecha, 
            gasto, 
            pedidos_id
        },{
            fields: [
                'codigo',
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Observación creada correctamente",
            observaciones: newObservacion
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            observaciones: null
        });
    };
};


export const updateObservaciones = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const observacionUpdate = await observaciones.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Observación actualizada',
            resultado: true,
            observaciones: observacionUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            observaciones: null
        });
    }
};

export const deleteObservaciones = async (req, res) => {
    try{
        const {id} = req.params;
        await observaciones.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Observación eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllObservaciones = async (req, res) => {
    try{
        const allObservaciones = await observaciones.findAll({
            attributes: [
                'codigo',
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observaciones: allObservaciones
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observaciones: null
        });
    };
};

export const getobservacionesId = async (req, res) => {
    try{
        const {id} = req.params;
        const observaciones = await observaciones.findOne({
            where: {
                id
            },
            attributes: [
                'codigo',
                'nombre',
                'precio_por_kg',
                'tipo',
                'proveedores_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            observaciones: observaciones
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observaciones: null
        });
    };
};