import numerosAba from '../models/numeros_aba.model';
import cuentas_bancos from '../models/cuentas_bancos.model';
import * as cuentaBancosController from './cuentas_bancos.controller';

export const createNumerosAba = async (req, res) => {
    try{
        const {nombre_banco, numero_aba} = req.body;
        let newNumeroAba = await numerosAba.create({
            nombre_banco, 
            numero_aba,
            vigencia: true
        },{
            fields: [
                'nombre_banco', 
                'numero_aba',
                'vigencia'
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
        const numeroAbaUpdate = await numerosAba.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
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
        const numeroAba = await numerosAba.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre_banco', 
                'numero_aba'
            ],
            include:[
                cuentas_bancos
            ]
        });
        if(numeroAba){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            };
            numeroAba.dataValues.cuentas_bancos.forEach(async element => {
                req.params = {
                    id: parseInt(element.dataValues.id)
                };
                if(aux.resultado) aux = await cuentaBancosController.deleteCuentasBancos(req, res);
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            let numeroAbaUpdate = null;
            aux.resultado ? numeroAbaUpdate = await numerosAba.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            res.json({
                resultado: true, 
                message: 'Número ABA eliminado correctamente'
            });
        } else {
            res.json({
                resultado: true, 
                message: 'Número ABA no encontrado'
            });
        };
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
            where: {
                vigencia: true
            },
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
        const numeroAba = await numerosAba.findOne({
            where: {
                id,
                vigencia: true
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
            numerosAba: numeroAba
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

export const getAllNumerosAbaWithFalse = async (req, res) => {
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