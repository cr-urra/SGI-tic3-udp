import sequelize from 'sequelize';
import {database} from '../database/database';

const monedas = database.define('monedas',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    monto:{
        type: sequelize.DOUBLE
    },
    fecha:{
        type: sequelize.DATE
    },
    cuentas_corrientes_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default monedas;