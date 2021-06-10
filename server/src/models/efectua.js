import sequelize from 'sequelize';
import {database} from '../database/database';

const efectua = database.define('efectua',{
    agentes_aduana_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    observaciones_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

export default efectua;