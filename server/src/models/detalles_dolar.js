import sequelize from 'sequelize';
import {database} from '../database/database';

const detalles_dolar = database.define('detalles_dolar',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    precio_compra:{
        type: sequelize.DOUBLE
    },
    historial_dolar_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default detalles_dolar;