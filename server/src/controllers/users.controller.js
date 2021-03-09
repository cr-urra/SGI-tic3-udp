import usuarios from '../models/users';

export async function updateUsers(req, res) {
    const {id} = req.params;
    const {rut, nombre, apellido, password} =  req.body;
    const users = await usuarios.findOne({
        attributes: ['rut','nombre', 'apellido','password'],
        where: {id}
    });
    const userUpdate = await usuarios.update({
        rut,
        nombre,
        apellido,
        password
    },
    {
        where: {id}
    });
    res.json({
        message: 'Usuario actualizado',
        userUpdate
    });
};

export async function deleteUsers(req, res) {
    const {id} = req.params;
    await usuarios.destroy({
        where: {
            id
        }
    });
    res.json({message: 'Usuario eliminado'});
};

export async function getUsersId(req, res) {
    const {id} = req.params;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id','password']
    });
    res.json(user);
};

export async function getAllUsers(req, res) {
    const allUsers = await usuarios.findAll({
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allUsers});
};