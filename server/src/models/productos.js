import sequelize from 'sequelize';
import {database} from '../database/database';

const productos = database.define('productos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    codigo:{
        type: sequelize.STRING
    },
    nombre:{
        type: sequelize.STRING
    },
    precio_por_kg:{
        type: sequelize.FLOAT
    },
    tipo:{
        type: sequelize.STRING
    },
    proveedores_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default productos;