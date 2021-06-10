import numerosAba from '../models/numeros_aba';

export const createNumerosAba = async (req, res) => {
    try{
        const {nombre_banco, numero_aba} = req.body;
        let newNumeroAba = await numerosAba.create({
            nombre_banco, 
            numero_aba
        },{
            fields: [
                'nombre_banco', 
                'numero_aba'
            ]
        });
        res.json({
            resultado: true,
            message: "Número ABA creado correctamente",
            numeroAba: newNumeroAba
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            numerosAba: null
        });
    };
};


export const updateNumerosAba = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const numeroAbaUpdate = await numerosAba.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Número ABA actualizado correctamente',
            resultado: true,
            numerosAba: numeroAbaUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            numerosAba: null
        });
    }
};

export const deleteNumerosAba = async (req, res) => {
    try{
        const {id} = req.params;
        await numerosAba.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Número ABA eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllNumerosAba = async (req, res) => {
    try{
        const allNumerosAba = await numerosAba.findAll({
            attributes: [
                'id', 
                'nombre_banco', 
                'numero_aba'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            numerosAba: allNumerosAba
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            numerosAba: null
        });
    };
};

export const getNumerosAbaId = async (req, res) => {
    try{
        const {id} = req.params;
        const numerosAba = await numerosAba.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'nombre_banco', 
                'numero_aba'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            numerosAba: numerosAba
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            numerosAba: null
        });
    };
};