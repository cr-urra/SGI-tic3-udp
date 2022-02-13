import '@babel/polyfill';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const https = require('https');
const fileUpload = require('express-fileupload');

require('nodemailer');
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
app.use(fileUpload({
    createParentPath: true
}));

// Importar rutas

import roles from './routes/roles.routes';
import usuarios from './routes/usuarios.routes';
import auth from './routes/auth.routes';
import telefonosUsuarios from './routes/telefonos_usuarios.routes';
import proveedores from './routes/proveedores.routes';
import productos from './routes/productos.routes';
import cuentasBancos from './routes/cuentas_bancos.routes';
import agentesAduana from './routes/agentes_aduana.routes';
import telefonosProveedores from './routes/telefonos_proveedores.routes';
import telefonosAgentesAduana from './routes/telefonos_agentes_aduana.routes';
import pedidos from './routes/pedidos.routes';
import paises from './routes/paises.routes';
import observaciones from './routes/observaciones.routes';
import numerosAba from './routes/numeros_aba.routes';
import movimientos from './routes/movimientos.routes';
import monedas from './routes/monedas.routes';
import historialPrecios from './routes/historial_precios.routes';
import historialDolar from './routes/historial_dolar.routes';
import gastosExtras from './routes/gastos_extras.routes';
import efectua from './routes/efectua.routes';
import asume from './routes/asume.routes';
import tiene from './routes/tiene.routes';
import dolarMensual from './routes/dolar_mensual.routes';
import documentos from './routes/documentos.routes';
import detallesPedidos from './routes/detalles_pedidos.routes';
import detallesDolar from './routes/detalles_dolar.routes';
import cuentasCorrientes from './routes/cuentas_corrientes.routes';
import unidadProductos from './routes/unidad_productos.routes';
import bancosAgentesAduana from './routes/bancos_agentes_aduana.routes';
import observadores from './routes/observadores.routes';
import mail from './routes/mail.routes';
import extrae from './routes/extrae.routes';
import files from './routes/files.routes';

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
app.use('/pedidos', pedidos);
app.use('/paises', paises);
app.use('/observaciones', observaciones);
app.use('/numerosAba', numerosAba);
app.use('/movimientos', movimientos);
app.use('/monedas', monedas);
app.use('/historialPrecios', historialPrecios);
app.use('/historialDolar', historialDolar);
app.use('/gastosExtras', gastosExtras);
app.use('/efectua', efectua);
app.use('/asume', asume);
app.use('/tiene', tiene);
app.use('/dolarMensual', dolarMensual);
app.use('/documentos', documentos);
app.use('/detallesPedidos', detallesPedidos);
app.use('/detallesDolar', detallesDolar);
app.use('/cuentasCorrientes', cuentasCorrientes);
app.use('/unidadProductos', unidadProductos);
app.use('/bancosAgentesAduana', bancosAgentesAduana);
app.use('/observadores', observadores);
app.use('/mail', mail);
app.use('/extrae', extrae);
app.use('/files', files);

// rutas directas

app.get('/csrf', (req, res) => { 
    res.send({csrfToken: req.csrfToken()});
});
app.get('/money', (req, res) => {
    https.get('https://mindicador.cl/api', (response) => {
        response.setEncoding('utf-8');
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            let dailyIndicators = JSON.parse(data);
            res.send(dailyIndicators);
        });
    }).on('error', (err) => {
        console.log(err);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    });
});

export default app;


