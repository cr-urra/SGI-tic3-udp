import '@babel/polyfill';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const os = require('os');
//equire('./database/associations');

//inicialización

const app = express();
const csrf = csurf({cookie: true});

//settings

app.set('port', process.env.PORT || 4000);

//variables globales

app.use((req,res,next) => {
    next();
});

//middlewares server

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(csrf);
app.use(express.urlencoded({
    extended: false
}));

//Importar rutas

import roles from './routes/roles.routes.js';
import usuarios from './routes/usuarios.routes.js';
import auth from './routes/auth.routes.js';

//routes

app.use('/usuarios', usuarios);
app.use('/auth', auth);
app.use('/roles', roles);

app.get('/csrf', (req, res) => { 
    res.send({csrfToken: req.csrfToken()})
});

export default app;


