import sequelize from 'sequelize';
import {database} from '../database/database';

const historial_precios = database.define('historial_precios',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    precio:{
        type: sequelize.FLOAT
    },
    fecha:{
        type: sequelize.STRING
    },
    productos_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default historial_precios;