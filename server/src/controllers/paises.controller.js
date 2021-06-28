import paises from '../models/paises';

export const createPaises = async (req, res) => {
    try{
        const {pais, codigo_iban} = req.body;
        let newPais = await paises.create({
            pais,
            codigo_iban,
            vigencia: true
        },{
            fields: [
                'pais',
                'codigo_iban',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "País creado correctamente",
            paises: newPais
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            paises: null
        });
    };
};


export const updatePaises = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const pais = await paises.update({
            body
        },
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'País actualizado',
            resultado: true,
            paises: pais
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            paises: null
        });
    }
};

export const deletePaises = async (req, res) => {
    try{
        const {id} = req.params;
        await paises.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'País eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllPaises = async (req, res) => {
    try{
        const allPaises = await paises.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id', 
                'pais', 
                'codigo_iban'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            paises: allPaises
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            paises: null
        });
    };
};

export const getPaisesId = async (req, res) => {
    try{
        const {id} = req.params;
        const pais = await paises.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'pais', 
                'codigo_iban'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            paises: pais
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            paises: null
        });
    };
};

export const getAllPaisesWithFalse = async (req, res) => {
    try{
        const allPaises = await paises.findAll({
            attributes: [
                'id', 
                'pais', 
                'codigo_iban'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            paises: allPaises
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            paises: null
        });
    };
};