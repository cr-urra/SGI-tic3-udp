import sequelize from 'sequelize';
import {database} from '../database/database';

const historial_dolar = database.define('historial_dolar',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    fecha:{
        type: sequelize.DATEONLY
    },
    precio:{
        type: sequelize.FLOAT
    },
    dolar_mensual_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default historial_dolar;