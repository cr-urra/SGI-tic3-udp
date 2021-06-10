import usuarios from '../models/usuarios';

export const verifyUser = async (req, res, next) => {
    const {rut} = req.body;
    const user = await usuarios.findOne({
        where: {rut},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
    });
    user ? res.json({
        message: "El rut ingresado ya existe", 
        rut: user.rut
    }) : next();
};

export const existUser = async (req, res, next) => {
    const {rut} = req.body;
    const user = await usuarios.findOne({
        where: {rut},
        attributes: ['rut']
    });
    user ? next() : res.json({message: "El rut ingresado no existe", rut: user.rut});
};