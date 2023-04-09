import sequelize from 'sequelize';
import {database} from '../database/database';

const proveedores = database.define('proveedores',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: sequelize.STRING
    },
    direccion:{
        type: sequelize.STRING
    },
    correo:{
        type: sequelize.STRING
    },
    pais:{
        type: sequelize.STRING
    },
    monedas_id:{
        type: sequelize.INTEGER
    },
    rut:{
        type: sequelize.STRING
    },
    vigencia:{
        type: sequelize.BOOLEAN
    },
    cuentas_bancos_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false,
    underscored: true
});

export default proveedores;