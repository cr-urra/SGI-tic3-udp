import sequelize from 'sequelize';
import {database} from '../database/database';

const observadores = database.define('observadores',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    rut:{
        type: sequelize.STRING
    },
    nombre:{
        type: sequelize.STRING
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default observadores;