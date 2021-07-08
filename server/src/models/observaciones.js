import sequelize from 'sequelize';
import {database} from '../database/database';

const observaciones = database.define('observaciones',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    observacion:{
        type: sequelize.TEXT
    },
    fecha:{
        type: sequelize.DATEONLY
    },
    gasto:{
        type: sequelize.INTEGER
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

export default observaciones;