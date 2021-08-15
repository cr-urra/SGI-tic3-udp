import sequelize from 'sequelize';
import {database} from '../database/database';

const cuentas_bancos = database.define('cuentas_bancos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    numero_cuenta:{
        type: sequelize.STRING
    },
    nombre_banco:{
        type: sequelize.STRING
    },
    swift_code:{
        type: sequelize.STRING
    },
    codigo_iban:{
        type: sequelize.STRING
    },
    referencia:{
        type: sequelize.TEXT
    },
    paises_id:{
        type: sequelize.INTEGER
    },
    numeros_aba_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default cuentas_bancos;