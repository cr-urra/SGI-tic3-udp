import sequelize from 'sequelize';
import {database} from '../database/database';

const movimientos = database.define('movimientos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    monto:{
        type: sequelize.DOUBLE
    },
    fecha:{
        type: sequelize.DATE
    },
    cuentas_corrientes_id:{
        type: sequelize.INTEGER
    },
    descripcion:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default movimientos;