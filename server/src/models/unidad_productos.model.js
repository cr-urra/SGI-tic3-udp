import sequelize from 'sequelize';
import {database} from '../database/database';

const unidad_productos = database.define('unidad_productos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    valor_unidad:{
        type: sequelize.FLOAT
    },
    nombre_medida:{
        type: sequelize.STRING
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default unidad_productos;