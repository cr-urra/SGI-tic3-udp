import sequelize from 'sequelize';
import {database} from '../database/database';

const roles = database.define('roles',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    cod_rol: {
        type: sequelize.TEXT
    },
    nombre:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default roles;