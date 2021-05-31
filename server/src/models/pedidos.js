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
    cantidad:{
        type: sequelize.BIGINT
    },
    nomnbre:{
        type: sequelize.STRING
    },
    pago_inicial:{
        type: sequelize.FLOAT
    },
    pago_final:{
        type: sequelize.FLOAT
    },
    fecha_inicial:{
        type: sequelize.DATE
    },
    fecha_pago:{
        type: sequelize.DATE
    },
    fecha_salida:{
        type: sequelize.DATE
    },
    fecha_llegada_real:{
        type: sequelize.DATE
    },
    fecha_llegada_estimada:{
        type: sequelize.DATE
    },
    fecha_aduana:{
        type: sequelize.DATE
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
    numeros_din:{
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
    }
},{
    timestamps: false
});

export default pedidos;