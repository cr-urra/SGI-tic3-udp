import sequelize from 'sequelize';
import {database} from '../database/database';

const gastos_extras = database.define('gastos_extras',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    monto:{
        type: sequelize.FLOAT
    },
    pedidos_id:{
        type: sequelize.INTEGER
    },
    observaciones_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default gastos_extras;