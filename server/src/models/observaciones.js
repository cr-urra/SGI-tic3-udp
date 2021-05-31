import sequelize from 'sequelize';
import {database} from '../database/database';

const observaciones = database.define('observaciones',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    observacion:{
        type: sequelize.text
    },
    fecha:{
        type: sequelize.DATE
    },
    gasto:{
        type: sequelize.BOOLEAN
    },
    pedidos_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default observaciones;