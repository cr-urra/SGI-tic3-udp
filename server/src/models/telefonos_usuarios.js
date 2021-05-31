import sequelize from 'sequelize';
import {database} from '../database/database';

const telefonos_usuarios = database.define('telefonos_usuarios',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    telefono:{
        type: sequelize.NUMBER
    },
    usuarios_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default telefonos_usuarios;