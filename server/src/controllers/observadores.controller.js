import observadores from '../models/observadores';

export const createObservadores = async (req, res) => {
    try{
        const {rut, nombre} = req.body;
        let newObservador = await observadores.create({
            rut, 
            nombre, 
            vigencia: true
        },{
            fields: [
                'rut', 
                'nombre', 
                'vigencia', 
            ]
        });
        res.json({
            resultado: true,
            message: "Observador creado correctamente",
            observadores: newObservador
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            observadores: null
        });
    };
};


export const updateObservadores = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const observadorUpdate = await observadores.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Observador actualizado correctamente',
            resultado: true,
            observadores: observadorUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            observadores: null
        });
    }
};

export const deleteObservadores = async (req, res) => {
    try{
        const {id} = req.params;
        const observador = await observadores.findOne({
            where: {
                id       
            },
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ]
        });
        if(observador){
            let id = observador.dataValues.id;
            const observadorUpdate = await observadores.update({
                vigencia: false
            },
            {
                where: {
                    id: id
                }
            });
            res.json({
                resultado: true, 
                message: 'Obsevador eliminado correctamente'
            });
        }   
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllObservadores = async (req, res) => {
    try{
        const allObservadores = await observadores.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observadores: allObservadores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observadores: null
        });
    };
};

export const getObservadoresId = async (req, res) => {
    try{
        const {id} = req.params;
        const observador = await observadores.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            observadores: observador
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observadores: null
        });
    };
};

export const getAllObservadoresWithFalse = async (req, res) => {
    try{
        const allObservadores = await observadores.findAll({
            attributes: [
                'id',
                'rut', 
                'nombre', 
                'vigencia', 
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            observadores: allObservadores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            observadores: null
        });
    };
};