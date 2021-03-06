import sequelize from 'sequelize';
import {database} from '../database/database';

const bancos_agentes_aduana = database.define('bancos_agentes_aduana',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    numero_cuenta:{
        type: sequelize.STRING
    },
    tipo_cuenta:{
        type: sequelize.STRING
    },
    nombre_banco:{
        type: sequelize.STRING
    },
    agentes_aduana_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default bancos_agentes_aduana;