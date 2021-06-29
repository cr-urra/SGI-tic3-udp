import sequelize from 'sequelize';
import {database} from '../database/database';

const tiene = database.define('tiene',{
    pedidos_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    productos_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

export default tiene;