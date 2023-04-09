import sequelize from 'sequelize';
import {database} from '../database/database';

const asume = database.define('asume',{
    observadores_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    agentes_aduana_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

export default asume;