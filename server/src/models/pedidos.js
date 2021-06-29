import sequelize from 'sequelize';
import {database} from '../database/database';

const pedidos = database.define('pedidos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    codigo:{
        type: sequelize.INTEGER
    },
    pago_inicial:{
        type: sequelize.FLOAT
    },
    pago_final:{
        type: sequelize.FLOAT
    },
    fecha_inicial:{
        type: sequelize.DATEONLY
    },
    fecha_pago:{
        type: sequelize.DATEONLY
    },
    fecha_salida:{
        type: sequelize.DATEONLY
    },
    fecha_llegada_real:{
        type: sequelize.DATEONLY
    },
    fecha_llegada_estimada:{
        type: sequelize.DATEONLY
    },
    fecha_aduana:{
        type: sequelize.DATEONLY
    },
    fecha_vencimiento:{
        type: sequelize.DATEONLY
    },
    estado:{
        type: sequelize.STRING
    },
    tipo_de_envio:{
        type: sequelize.STRING
    },
    flete:{
        type: sequelize.FLOAT
    },
    valor_cif:{
        type: sequelize.FLOAT
    },
    honorarios:{
        type: sequelize.FLOAT
    },
    arancel:{
        type: sequelize.FLOAT
    },
    gastos_agencia:{
        type: sequelize.FLOAT
    },
    numero_din:{
        type: sequelize.STRING
    },
    cuentas_bancos_id:{
        type: sequelize.INTEGER
    },
    agentes_aduana_id:{
        type: sequelize.INTEGER
    },
    proveedores_id:{
        type: sequelize.INTEGER
    },
    dolar_mensual_id:{
        type: sequelize.INTEGER
    },
    tipo_pago:{
        type: sequelize.BOOLEAN
    },
    vigencia:{
        type: sequelize.BOOLEAN
    },
    seguro:{
        type: sequelize.FLOAT
    }
},{
    timestamps: false,
    underscored: true,
});

export default pedidos;