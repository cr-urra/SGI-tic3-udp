import monedas from '../models/monedas';
import proveedores from '../models/proveedores';
import * as proveedoresController from './proveedores.controller';

export const createMonedas = async (req, res) => {
    try{
        const {pais, moneda} = req.body;
        let newMoneda = await monedas.create({
            pais, 
            moneda,
            vigencia: true
        },{
            fields: [
                'pais', 
                'moneda',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Moneda creada correctamente",
            monedas: newMoneda
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            monedas: null
        });
    };
};


export const updateMonedas = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const monedaUpdate = await monedas.update({
            body
        },
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Moneda actualizada correctamente',
            resultado: true,
            monedas: monedaUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            monedas: null
        });
    }
};

export const deleteMonedas = async (req, res) => {
    try{
        const {id} = req.params;
        const moneda = await monedas.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'pais', 
                'moneda'
            ],
            include: [
                proveedores
            ]
        });
        if(moneda){

            let proveedoresIds = []
            moneda.dataValues.proveedores.forEach(element => {
                proveedoresIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
                id = proveedoresIds
            };

            let aux = await proveedoresController.deleteProveedores(req, res);
            let monedaUpdate;

            aux.resultado ? monedaUpdate = await monedas.update({
                vigencia = false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }): res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

        }
        res.json({
            resultado: true, 
            message: 'Moneda eliminada correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllMonedas = async (req, res) => {
    try{
        const allMonedas = await monedas.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id',
                'pais', 
                'moneda'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            monedas: allMonedas
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            monedas: null
        });
    };
};

export const getMonedasId = async (req, res) => {
    try{
        const {id} = req.params;
        const moneda = await monedas.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'pais', 
                'moneda'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            monedas: moneda
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            monedas: null
        });
    };
};

export const getAllMonedasWithFalse = async (req, res) => {
    try{
        const allMonedas = await monedas.findAll({
            attributes: [
                'id',
                'pais', 
                'moneda'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            monedas: allMonedas
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            monedas: null
        });
    };
};