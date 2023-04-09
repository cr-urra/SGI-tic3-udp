import sequelize from 'sequelize';
import {database} from '../database/database';

const detalles_pedidos = database.define('detalles_pedidos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    diferencia_de_costos:{
        type: sequelize.DOUBLE
    },
    pedidos_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default detalles_pedidos;