"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _roles = _interopRequireDefault(require("./routes/roles.js"));

var _users = _interopRequireDefault(require("./routes/users.js"));

var _auth = _interopRequireDefault(require("./routes/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var cors = require('cors'); //inicialización


var app = express(); //settings

app.set('port', process.env.PORT || 4000); //middlewares server

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); //variables globales

app.use(function (req, res, next) {
  next();
}); //Importar rutas

//routes
app.use('/users', _users["default"]);
app.use('/auth', _auth["default"]);
app.use('/roles', _roles["default"]); //public
//app.use(express.static('../public'));

var _default = app;
exports["default"] = _default;