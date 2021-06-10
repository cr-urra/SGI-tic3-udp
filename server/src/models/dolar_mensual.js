import sequelize from 'sequelize';
import {database} from '../database/database';

const dolar_mensual = database.define('dolar_mensual',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    valor_mensual:{
        type: sequelize.DOUBLE
    },
    fecha_registro:{
        type: sequelize.DATE
    }
},{
    timestamps: false
});

export default dolar_mensual;