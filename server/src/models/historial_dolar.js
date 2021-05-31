import sequelize from 'sequelize';
import {database} from '../database/database';

const historial_dolar = database.define('historial_dolar',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    fecha:{
        type: sequelize.DATE
    },
    precio:{
        type: sequelize.FLOAT
    },
    dolar_mensual_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default historial_dolar;