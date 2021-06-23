import unidadProductos from '../models/unidad_productos';

export const createUnidadProductos = async (req, res) => {
    try{
        const {tipo, valor_unidad} = req.body;
        let newUnidadProducto = await unidadProductos.create({
            tipo, 
            valor_unidad
        },{
            fields: [
                'tipo', 
                'valor_unidad'
            ]
        });
        res.json({
            resultado: true,
            message: "Unidad de producto creada correctamente",
            unidadProductos: newUnidadProducto
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            unidadProductos: null
        });
    };
};


export const updateUnidadProductos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const unidadProductosUpdate = await unidadProductos.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Unidad de producto actualizada correctamente',
            resultado: true,
            unidadProductos: unidadProductosUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            unidadProductos: null
        });
    }
};

export const deleteUnidadProductos = async (req, res) => {
    try{
        const {id} = req.params;
        await unidadProductos.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Unidad de producto eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllUnidadProductos = async (req, res) => {
    try{
        const allUnidadProductos = await unidadProductos.findAll({
            attributes: [
                'id',
                'tipo', 
                'valor_unidad'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            unidadProductos: allUnidadProductos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            unidadProductos: null
        });
    };
};

export const getUnidadProductosId = async (req, res) => {
    try{
        const {id} = req.params;
        const unidadProductos = await unidadProductos.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'tipo', 
                'valor_unidad'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            unidadProductos: unidadProductos
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            unidadProductos: null
        });
    };
};