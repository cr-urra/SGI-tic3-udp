import '@babel/polyfill';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
require('./database/associations');

// inicialización

const app = express();
const csrf = csurf({cookie: true});

// settings

app.set('port', process.env.PORT || 4000);

// variables globales

app.use((req,res,next) => {
    next();
});

// middlewares server

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(csrf);
app.use(express.urlencoded({
    extended: false
}));

// Importar rutas

import roles from './routes/roles.routes.js';
import usuarios from './routes/usuarios.routes';
import auth from './routes/auth.routes';
import telefonosUsuarios from './routes/telefonos_usuarios.routes';
import proveedores from './routes/proveedores.routes';
import productos from './routes/productos.routes';
import cuentasBancos from './routes/cuentas_bancos.routes';
import agentesAduana from './routes/agentes_aduana.routes';
import telefonosProveedores from './routes/telefonos_proveedores.routes';
import telefonosAgentesAduana from './routes/telefonos_agentes_aduana.routes';

// routes

app.use('/usuarios', usuarios);
app.use('/auth', auth);
app.use('/roles', roles);
app.use('/telefonosUsuarios', telefonosUsuarios);
app.use('/proveedores', proveedores);
app.use('/productos', productos);
app.use('/cuentasBancos', cuentasBancos);
app.use('/agentesAduana', agentesAduana);
app.use('/telefonosProveedores', telefonosProveedores);
app.use('/telefonosAgentesAduana', telefonosAgentesAduana);

app.get('/csrf', (req, res) => { 
    res.send({csrfToken: req.csrfToken()})
});

export default app;


