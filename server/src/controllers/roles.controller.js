import roles from '../models/roles';

export async function getAllRoles(req, res) {
    const allRoles = await roles.findAll({
        attributes: ['id', 'cod_rol', 'nombre'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allRoles});
};