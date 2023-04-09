import usuarios from '../models/usuarios.model';

export const verifyUser = async (req, res, next) => {
    const {rut} = req.body;
    const user = await usuarios.findOne({
        where: {
            rut
        },
        attributes: [
            'id', 
            'rut'
        ]
    });
    user ? res.json({
        message: "El rut ingresado ya existe", 
        resultado: false
    }) : next();
};

export const existUser = async (req, res, next) => {
    const {rut} = req.body;
    const user = await usuarios.findOne({
        where: {
            rut
        },
        attributes: [
            'rut'
        ]
    });
    user ? next() : res.json({
        message: "El rut ingresado no existe", 
        resultado: false
    });
};