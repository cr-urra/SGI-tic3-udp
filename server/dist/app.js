"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _roles = _interopRequireDefault(require("./routes/roles.routes"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _telefonos_usuarios = _interopRequireDefault(require("./routes/telefonos_usuarios.routes"));

var _proveedores = _interopRequireDefault(require("./routes/proveedores.routes"));

var _productos = _interopRequireDefault(require("./routes/productos.routes"));

var _cuentas_bancos = _interopRequireDefault(require("./routes/cuentas_bancos.routes"));

var _agentes_aduana = _interopRequireDefault(require("./routes/agentes_aduana.routes"));

var _telefonos_proveedores = _interopRequireDefault(require("./routes/telefonos_proveedores.routes"));

var _telefonos_agentes_aduana = _interopRequireDefault(require("./routes/telefonos_agentes_aduana.routes"));

var _pedidos = _interopRequireDefault(require("./routes/pedidos.routes"));

var _paises = _interopRequireDefault(require("./routes/paises.routes"));

var _observaciones = _interopRequireDefault(require("./routes/observaciones.routes"));

var _numeros_aba = _interopRequireDefault(require("./routes/numeros_aba.routes"));

var _movimientos = _interopRequireDefault(require("./routes/movimientos.routes"));

var _monedas = _interopRequireDefault(require("./routes/monedas.routes"));

var _historial_precios = _interopRequireDefault(require("./routes/historial_precios.routes"));

var _historial_dolar = _interopRequireDefault(require("./routes/historial_dolar.routes"));

var _gastos_extras = _interopRequireDefault(require("./routes/gastos_extras.routes"));

var _efectua = _interopRequireDefault(require("./routes/efectua.routes"));

var _asume = _interopRequireDefault(require("./routes/asume.routes"));

var _tiene = _interopRequireDefault(require("./routes/tiene.routes"));

var _dolar_mensual = _interopRequireDefault(require("./routes/dolar_mensual.routes"));

var _documentos = _interopRequireDefault(require("./routes/documentos.routes"));

var _detalles_pedidos = _interopRequireDefault(require("./routes/detalles_pedidos.routes"));

var _detalles_dolar = _interopRequireDefault(require("./routes/detalles_dolar.routes"));

var _cuentas_corrientes = _interopRequireDefault(require("./routes/cuentas_corrientes.routes"));

var _unidad_productos = _interopRequireDefault(require("./routes/unidad_productos.routes"));

var _bancos_agentes_aduana = _interopRequireDefault(require("./routes/bancos_agentes_aduana.routes"));

var _observadores = _interopRequireDefault(require("./routes/observadores.routes"));

var _mail = _interopRequireDefault(require("./routes/mail.routes"));

var _extrae = _interopRequireDefault(require("./routes/extrae.routes"));

var _files = _interopRequireDefault(require("./routes/files.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var cookieParser = require('cookie-parser');

var csurf = require('csurf');

var https = require('https');

var fileUpload = require('express-fileupload');

require('nodemailer');

require('./database/associations'); // inicialización


var app = express();
var csrf = csurf({
  cookie: true
}); // settings

app.set('port', process.env.PORT || 4000); // variables globales

app.use(function (req, res, next) {
  next();
}); // middlewares server

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
})); // Importar rutas

// routes
app.use('/usuarios', _usuarios["default"]);
app.use('/auth', _auth["default"]);
app.use('/roles', _roles["default"]);
app.use('/telefonosUsuarios', _telefonos_usuarios["default"]);
app.use('/proveedores', _proveedores["default"]);
app.use('/productos', _productos["default"]);
app.use('/cuentasBancos', _cuentas_bancos["default"]);
app.use('/agentesAduana', _agentes_aduana["default"]);
app.use('/telefonosProveedores', _telefonos_proveedores["default"]);
app.use('/telefonosAgentesAduana', _telefonos_agentes_aduana["default"]);
app.use('/pedidos', _pedidos["default"]);
app.use('/paises', _paises["default"]);
app.use('/observaciones', _observaciones["default"]);
app.use('/numerosAba', _numeros_aba["default"]);
app.use('/movimientos', _movimientos["default"]);
app.use('/monedas', _monedas["default"]);
app.use('/historialPrecios', _historial_precios["default"]);
app.use('/historialDolar', _historial_dolar["default"]);
app.use('/gastosExtras', _gastos_extras["default"]);
app.use('/efectua', _efectua["default"]);
app.use('/asume', _asume["default"]);
app.use('/tiene', _tiene["default"]);
app.use('/dolarMensual', _dolar_mensual["default"]);
app.use('/documentos', _documentos["default"]);
app.use('/detallesPedidos', _detalles_pedidos["default"]);
app.use('/detallesDolar', _detalles_dolar["default"]);
app.use('/cuentasCorrientes', _cuentas_corrientes["default"]);
app.use('/unidadProductos', _unidad_productos["default"]);
app.use('/bancosAgentesAduana', _bancos_agentes_aduana["default"]);
app.use('/observadores', _observadores["default"]);
app.use('/mail', _mail["default"]);
app.use('/extrae', _extrae["default"]);
app.use('/files', _files["default"]); // rutas directas

app.get('/csrf', function (req, res) {
  res.send({
    csrfToken: req.csrfToken()
  });
});
app.get('/money', function (req, res) {
  https.get('https://mindicador.cl/api', function (response) {
    response.setEncoding('utf-8');
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      var dailyIndicators = JSON.parse(data);
      res.send(dailyIndicators);
    });
  }).on('error', function (err) {
    console.log(err);
    res.json({
      dolar: {
        valor: 0
      },
      uf: {
        valor: 0
      },
      utm: {
        valor: 0
      }
    });
  });
});
var _default = app;
exports["default"] = _default;