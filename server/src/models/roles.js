import sequelize from 'sequelize';
import {database} from '../database/database';

const roles = database.define('roles',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: sequelize.STRING
    },
    cod_rol:{
        type: sequelize.STRING
    }
},{
    timestamps: false
});

export default roles;