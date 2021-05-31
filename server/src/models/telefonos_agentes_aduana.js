import sequelize from 'sequelize';
import {database} from '../database/database';

const telefonos_agentes_aduana = database.define('telefonos_agentes_aduana',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    telefono:{
        type: sequelize.NUMBER
    },
    agentes_aduana_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default telefonos_agentes_aduana;