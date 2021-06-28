import sequelize from 'sequelize';
import {database} from '../database/database';

const documentos = database.define('documentos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre_documento:{
        type: sequelize.STRING
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

export default documentos;