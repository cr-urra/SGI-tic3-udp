import sequelize from 'sequelize';
import {database} from '../database/database';

const agentes_aduana = database.define('agentes_aduana',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: sequelize.STRING
    },
    apellido:{
        type: sequelize.STRING
    },
    correo:{
        type: sequelize.STRING
    }
},{
    timestamps: false
});

export default agentes_aduana;