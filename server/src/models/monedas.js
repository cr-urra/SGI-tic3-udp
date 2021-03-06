import sequelize from 'sequelize';
import {database} from '../database/database';

const monedas = database.define('monedas',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    pais:{
        type: sequelize.STRING
    },
    moneda:{
        type: sequelize.STRING
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default monedas;