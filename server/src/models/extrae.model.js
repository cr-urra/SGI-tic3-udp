import sequelize from 'sequelize';
import {database} from '../database/database';

const extrae = database.define('extrae',{
    pedidos_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    historial_precios_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

export default extrae;