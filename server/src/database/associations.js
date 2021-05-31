import usuarios from '../models/usuarios';
import roles from '../models/roles';

// 1:N

usuarios.hasMany(roles, {foreingKey: 'roles_id', sourceKey: 'id'});
roles.belongsTo(usuarios, {foreingKey: 'roles_id', sourceKey: 'id'});