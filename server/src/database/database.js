import sequelize from 'sequelize';

export const database = new sequelize(
    'ec514aa2_ea76f1f9', //Nombre bd
    'ec514aa2_usreede3de9', //Usuario
    '9VE5Y#Zi9:B_N-', //Contraseña
    {
        host: 'shx801.guebs.net',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        },
        logging: false,
        define: {
            "createdAt": "createdat",
            "updatedAt": "updatedat",
            freezeTableName: true
        },
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
        }
    }
)