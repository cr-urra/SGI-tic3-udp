import sequelize from 'sequelize';
import {database} from '../database/database';

const paises = database.define('paises',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    pais:{
        type: sequelize.STRING
    },
    codigo_iban:{
        type: sequelize.STRING
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default paises;