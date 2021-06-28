import sequelize from 'sequelize';
import {database} from '../database/database';

const telefonos_proveedores = database.define('telefonos_proveedores',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    telefono:{
        type: sequelize.NUMBER
    },
    proveedores_id:{
        type: sequelize.INTEGER
    },
    vigencia:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default telefonos_proveedores;