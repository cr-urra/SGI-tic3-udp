import proveedores from '../models/proveedores';
import pedidos from '../models/pedidos';
import productos from '../models/productos';
import * as pedidosController from './pedidos.controller';
import * as productosController from './productos.controller';
import * as telefonosProveedoresController from './telefonos_proveedores.controller';
import * as cuentasBancosController from './cuentas_bancos.controller';
import telefonos_proveedores from '../models/telefonos_proveedores';
import cuentas_bancos from '../models/cuentas_bancos';

export const createProveedores = async (req, res) => {
    try{
        const {nombre, direccion, correo, pais, monedas_id, rut, cuentas_bancos_id} = req.body;
        let newProveedor = await proveedores.create({
            nombre,
            direccion,
            correo,
            pais,
            monedas_id,
            rut,
            cuentas_bancos_id,
            vigencia: true
        },{
            fields: [
                'nombre',
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut',
                'cuentas_bancos_id',
                'vigencia'
            ]
        });
        res.json({
            resultado: true,
            message: "Proveedor creado correctamente",
            proveedores: newProveedor
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, por favor contactese con el administrador", 
            resultado: false, 
            proveedores: null
        });
    };
};


export const updateProveedores = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const proveedorUpdate = await proveedores.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
        });
        res.json({
            message: 'Proveedor actualizado',
            resultado: true,
            proveedores: proveedorUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            proveedores: null
        });
    }
};

export const deleteProveedores = async (req, res) => {
    const body = req.body;
    try{
        const {id} = req.params;
        const proveedor = await proveedores.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id'
            ],
            include:[
                pedidos,
                productos,
                telefonos_proveedores
            ]
        });
        if(proveedor){
            let aux = {
                resultado: true
            };
            req.body = {
                cascade: true
            }
            proveedor.dataValues.productos.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await productosController.deleteProductos(req, res)
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                };
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            proveedor.dataValues.pedidos.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await pedidosController.deletePedidos(req, res);
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                };
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            proveedor.dataValues.telefonos_proveedores.forEach(async element => {
                req.params = {
                    id: element.dataValues.id
                };
                if(aux.resultado) aux = await telefonosProveedoresController.deleteTelefonosProveedores(req, res) 
                else if(aux.resultado == false && body.cascade == true) return {
                    resultado: false
                };
                else res.json({
                    resultado: false, 
                    message: "Ha ocurrido un error, porfavor contactese con el administrador"
                });
            });
            let proveedorUpdate;
            if(aux.resultado) proveedorUpdate = await proveedores.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            });
            else if(aux.resultado == false && body.cascade == true) return {
                resultado: false
            };  
            else res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            if(body.cascade) return {
                resultado: true
            };
            else res.json({
                resultado: true, 
                message: 'Proveedor eliminado correctamente'
            });
        } else {
            if(body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Proveedor no encontrado'
            });
        };
    }catch(e){
        console.log(e);
        if(req.body.cascade) return {
            resultado: false
        }
        else res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    };
    
};

export const getAllProveedores = async (req, res) => {
    try{
        const allProveedores = await proveedores.findAll({
            where: {
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre', 
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut',
                'cuentas_bancos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            proveedores: allProveedores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            proveedores: null
        });
    };
};

export const getProveedoresId = async (req, res) => {
    try{
        const {id} = req.params;
        const proveedor = await proveedores.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id', 
                'nombre', 
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut',
                'cuentas_bancos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            proveedores: proveedor
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            proveedores: null
        });
    };
};

export const getAllProveedoresWithFalse = async (req, res) => {
    try{
        const allProveedores = await proveedores.findAll({
            attributes: [
                'id', 
                'nombre', 
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut',
                'cuentas_bancos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            proveedores: allProveedores
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            proveedores: null
        });
    };
};