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
        type: sequelize.DATEONLY
    },
    productos_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default historial_precios;