import sequelize from 'sequelize';
import {database} from '../database/database';

const cuentas_corrientes = database.define('cuentas_corrientes',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    debe:{
        type: sequelize.DOUBLE
    },
    haber:{
        type: sequelize.DOUBLE
    },
    agentes_aduana_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default cuentas_corrientes;