import proveedores from '../models/proveedores';
import pedidos from '../models/pedidos';
import productos from '../models/productos';
import telefonos_proveedores from '../models/telefonos_proveedores';
import * as pedidosController from './pedidos.controller';
import * as productosController from './productos.controller';
import * as telefonosProveedoresController from './telefonos_proveedores.controller';

export const createProveedores = async (req, res) => {
    try{
        const {nombre, direccion, correo, pais, monedas_id, rut} = req.body;
        let newProveedor = await proveedores.create({
            nombre,
            direccion,
            correo,
            pais,
            monedas_id,
            rut,
            vigencia: true
        },{
            fields: [
                'nombre',
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut',
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
        const proveedorUpdate = await proveedores.update({
            body
        },
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
    try{
        const {id} = req.params;
        const proveedor = await proveedores.findOne({
            where: {
                id
            },
            attributes: [
                'id', 
                'nombre', 
                'direccion',
                'correo',
                'pais',
                'monedas_id',
                'rut'
            ],
            include:[
                pedidos,
                productos,
                telefonos_proveedores
            ]
        });

        if(proveedor){

            let pedidosIds=[];
            let productosIds=[];
            let telefonosProveedoresIds=[];

            proveedor.dataValues.pedidos.forEach(element => {
                pedidosIds.push(parseInt(element.dataValues.id));
            });
            proveedor.dataValues.productos.forEach(element => {
                productosIds.push(parseInt(element.dataValues.id));
            });
            proveedor.dataValues.telefonos_proveedores.forEach(element => {
                telefonosProveedoresIds.push(parseInt(element.dataValues.id));
            });

            req.params = {
                id: pedidosIds
            };
            let aux = await pedidosController.deletePedidos(req, res);

            req.params = {
                id: productosIds
            };
            aux.resultado ? aux = await productosController.deleteProductos(req, res) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

            req.params = {
                id: telefonosProveedoresIds
            };
            aux.resultado ? aux = await telefonosProveedoresController.deleteTelefonosProveedores(req, res) : res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

            let proveedorUpdate;
            aux.resultado ? proveedorUpdate = await proveedores.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }):res.json({
                resultado: false, 
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
        }
        res.json({
            resultado: true, 
            message: 'Proveedor eliminado correctamente'
        });

    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
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
                'rut'
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
                'rut'
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
                'rut'
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