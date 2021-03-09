import sequelize from 'sequelize';
import {database} from '../database/database';
import roles from './roles';

const users = database.define('user', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    rut: {
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    },
    apellido:{
        type: sequelize.TEXT
    },
    roles_id:{
        type: sequelize.INTEGER
    },
    password:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

users.hasMany(roles, {foreingKey: 'roles_id', sourceKey: 'id'});
roles.belongsTo(users, {foreingKey: 'roles_id', sourceKey: 'id'});

export default users;