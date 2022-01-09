import pedidos from '../models/pedidos';
import proveedores from '../models/proveedores';
import productos from '../models/productos';
import agentesAduana from '../models/agentes_aduana';
import tiene from '../models/tiene';

export const verifyProveedores = async (req, res, next) => {
    const {id} = req.params;
    const proveedor = await proveedores.findOne({
        where: {
            id
        },
        attributes: [
            'id'
        ],
        include: [
            pedidos
        ]
    });
    proveedor.dataValues.pedidos.length > 0 ? res.json({
        message: "El proveedor ingresado se encuentra vinculado a un pedido", 
        resultado: false
    }) : next();
};

export const verifyProductos = async (req, res, next) => {
    const {id} = req.params;
    const producto = await productos.findOne({
        where: {
            id
        },
        attributes: [
            'id'
        ],
        include: [
            tiene
        ]
    });
    producto.dataValues.tienes.length > 0 ? res.json({
        message: "El producto ingresado se encuentra vinculado a un pedido", 
        resultado: false
    }) : next();
};

export const verifyAgentesAduana = async (req, res, next) => {
    const {id} = req.params;
    const agenteAduana = await agentesAduana.findOne({
        where: {
            id
        },
        attributes: [
            'id'
        ],
        include: [
            pedidos
        ]
    });
    agenteAduana.dataValues.pedidos.length > 0 ? res.json({
        message: "El agente de aduana ingresado se encuentra vinculado a un pedido", 
        resultado: false
    }) : next();
};