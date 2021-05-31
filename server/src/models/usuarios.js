import sequelize from 'sequelize';
import {database} from '../database/database';

const usuarios = database.define('usuarios', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    rut:{
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    },
    apellido:{
        type: sequelize.STRING
    },
    correo:{
        type: sequelize.TEXT
    },
    contraseña:{
        type: sequelize.TEXT
    },
    roles_id:{
        type: sequelize.INTEGER
    },
    verificacion:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default usuarios;