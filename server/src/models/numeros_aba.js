import sequelize from 'sequelize';
import {database} from '../database/database';

const numeros_aba = database.define('numeros_aba',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre_banco:{
        type: sequelize.STRING
    },
    numero_aba:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default numeros_aba;