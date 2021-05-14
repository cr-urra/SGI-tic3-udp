import users from '../models/users';
import roles from '../models/roles';

// 1:N

users.hasMany(roles, {foreingKey: 'roles_id', sourceKey: 'id'});
roles.belongsTo(users, {foreingKey: 'roles_id', sourceKey: 'id'});