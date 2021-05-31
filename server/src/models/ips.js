import sequelize from 'sequelize';
import {database} from '../database/database';

const ips = database.define('ips',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    ip:{
        type: sequelize.STRING
    },
    usuarios_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default ips;