"use strict";

var _agentes_aduana = _interopRequireDefault(require("../models/agentes_aduana"));

var _cuentas_bancos = _interopRequireDefault(require("../models/cuentas_bancos"));

var _cuentas_corrientes = _interopRequireDefault(require("../models/cuentas_corrientes"));

var _detalles_dolar = _interopRequireDefault(require("../models/detalles_dolar"));

var _detalles_pedidos = _interopRequireDefault(require("../models/detalles_pedidos"));

var _documentos = _interopRequireDefault(require("../models/documentos"));

var _dolar_mensual = _interopRequireDefault(require("../models/dolar_mensual"));

var _gastos_extras = _interopRequireDefault(require("../models/gastos_extras"));

var _historial_dolar = _interopRequireDefault(require("../models/historial_dolar"));

var _historial_precios = _interopRequireDefault(require("../models/historial_precios"));

var _monedas = _interopRequireDefault(require("../models/monedas"));

var _movimientos = _interopRequireDefault(require("../models/movimientos"));

var _numeros_aba = _interopRequireDefault(require("../models/numeros_aba"));

var _observaciones = _interopRequireDefault(require("../models/observaciones"));

var _observadores = _interopRequireDefault(require("../models/observadores"));

var _paises = _interopRequireDefault(require("../models/paises"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var _roles = _interopRequireDefault(require("../models/roles"));

var _telefonos_agentes_aduana = _interopRequireDefault(require("../models/telefonos_agentes_aduana"));

var _telefonos_proveedores = _interopRequireDefault(require("../models/telefonos_proveedores"));

var _telefonos_usuarios = _interopRequireDefault(require("../models/telefonos_usuarios"));

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _bancos_agentes_aduana = _interopRequireDefault(require("../models/bancos_agentes_aduana"));

var _efectua = _interopRequireDefault(require("../models/efectua"));

var _unidad_productos = _interopRequireDefault(require("../models/unidad_productos"));

var _tiene = _interopRequireDefault(require("../models/tiene"));

var _asume = _interopRequireDefault(require("../models/asume"));

var _extrae = _interopRequireDefault(require("../models/extrae"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1:1
_pedidos["default"].hasOne(_detalles_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_detalles_pedidos["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_cuentas_bancos["default"].hasOne(_proveedores["default"], {
  foreignKey: 'cuentas_bancos_id',
  sourceKey: 'id'
});

_proveedores["default"].belongsTo(_cuentas_bancos["default"], {
  foreignKey: 'cuentas_bancos_id',
  sourceKey: 'id'
});

_historial_dolar["default"].hasOne(_detalles_dolar["default"], {
  foreignKey: 'historial_dolar_id',
  sourceKey: 'id'
});

_detalles_dolar["default"].belongsTo(_historial_dolar["default"], {
  foreignKey: 'historial_dolar_id',
  sourceKey: 'id'
});

_agentes_aduana["default"].hasOne(_cuentas_corrientes["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_cuentas_corrientes["default"].belongsTo(_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_agentes_aduana["default"].hasOne(_bancos_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_bancos_agentes_aduana["default"].belongsTo(_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
}); // 1:N


_productos["default"].hasMany(_historial_precios["default"], {
  foreignKey: 'productos_id',
  sourceKey: 'id'
});

_historial_precios["default"].belongsTo(_productos["default"], {
  foreignKey: 'productos_id',
  sourceKey: 'id'
});

_unidad_productos["default"].hasMany(_productos["default"], {
  foreignKey: 'unidad_productos_id',
  sourceKey: 'id'
});

_productos["default"].belongsTo(_unidad_productos["default"], {
  foreignKey: 'unidad_productos_id',
  sourceKey: 'id'
});

_observaciones["default"].hasMany(_gastos_extras["default"], {
  foreignKey: 'observaciones_id',
  sourceKey: 'id'
});

_gastos_extras["default"].belongsTo(_gastos_extras["default"], {
  foreignKey: 'observaciones_id',
  sourceKey: 'id'
});

_pedidos["default"].hasMany(_gastos_extras["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_gastos_extras["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_pedidos["default"].hasMany(_observaciones["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_observaciones["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_usuarios["default"].hasMany(_telefonos_usuarios["default"], {
  foreignKey: 'usuarios_id',
  sourceKey: 'id'
});

_telefonos_usuarios["default"].belongsTo(_usuarios["default"], {
  foreignKey: 'usuarios_id',
  sourceKey: 'id'
});

_roles["default"].hasMany(_usuarios["default"], {
  foreignKey: 'roles_id',
  sourceKey: 'id'
});

_usuarios["default"].belongsTo(_roles["default"], {
  foreignKey: 'roles_id',
  sourceKey: 'id'
});

_dolar_mensual["default"].hasMany(_pedidos["default"], {
  foreignKey: 'dolar_mensual_id',
  sourceKey: 'id'
});

_pedidos["default"].belongsTo(_dolar_mensual["default"], {
  foreignKey: 'dolar_mensual_id',
  sourceKey: 'id'
});

_agentes_aduana["default"].hasMany(_pedidos["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_pedidos["default"].belongsTo(_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_pedidos["default"].hasMany(_documentos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_documentos["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_cuentas_bancos["default"].hasMany(_pedidos["default"], {
  foreignKey: 'cuentas_bancos_id',
  sourceKey: 'id'
});

_pedidos["default"].belongsTo(_cuentas_bancos["default"], {
  foreignKey: 'cuentas_bancos_id',
  sourceKey: 'id'
});

_proveedores["default"].hasMany(_pedidos["default"], {
  foreignKey: 'proveedores_id',
  sourceKey: 'id'
});

_pedidos["default"].belongsTo(_proveedores["default"], {
  foreignKey: 'proveedores_id',
  sourceKey: 'id'
});

_monedas["default"].hasMany(_proveedores["default"], {
  foreignKey: 'monedas_id',
  sourceKey: 'id'
});

_proveedores["default"].belongsTo(_monedas["default"], {
  foreignKey: 'monedas_id',
  sourceKey: 'id'
});

_proveedores["default"].hasMany(_telefonos_proveedores["default"], {
  foreignKey: 'proveedores_id',
  sourceKey: 'id'
});

_telefonos_proveedores["default"].belongsTo(_proveedores["default"], {
  foreignKey: 'proveedores_id',
  sourceKey: 'id'
});

_paises["default"].hasMany(_cuentas_bancos["default"], {
  foreignKey: 'paises_id',
  sourceKey: 'id'
});

_cuentas_bancos["default"].belongsTo(_paises["default"], {
  foreignKey: 'paises_id',
  sourceKey: 'id'
});

_numeros_aba["default"].hasMany(_cuentas_bancos["default"], {
  foreignKey: 'numeros_aba_id',
  sourceKey: 'id'
});

_cuentas_bancos["default"].belongsTo(_numeros_aba["default"], {
  foreignKey: 'numeros_aba_id',
  sourceKey: 'id'
});

_proveedores["default"].hasMany(_productos["default"], {
  foreignKey: 'proveedores_id',
  sourceKey: 'id'
});

_productos["default"].belongsTo(_proveedores["default"], {
  foreignKey: 'proveedores_id',
  sourceKey: 'id'
});

_agentes_aduana["default"].hasMany(_telefonos_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_telefonos_agentes_aduana["default"].belongsTo(_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_agentes_aduana["default"].hasMany(_telefonos_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_telefonos_agentes_aduana["default"].belongsTo(_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_cuentas_corrientes["default"].hasMany(_movimientos["default"], {
  foreignKey: 'cuentas_corrientes_id',
  sourceKey: 'id'
});

_movimientos["default"].belongsTo(_cuentas_corrientes["default"], {
  foreignKey: 'cuentas_corrientes_id',
  sourceKey: 'id'
});

_pedidos["default"].hasMany(_historial_dolar["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_historial_dolar["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_dolar_mensual["default"].hasMany(_historial_dolar["default"], {
  foreignKey: 'dolar_mensual_id',
  sourceKey: 'id'
});

_historial_dolar["default"].belongsTo(_dolar_mensual["default"], {
  foreignKey: 'dolar_mensual_id',
  sourceKey: 'id'
});

_pedidos["default"].hasMany(_tiene["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_tiene["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_productos["default"].hasMany(_tiene["default"], {
  foreignKey: 'productos_id',
  sourceKey: 'id'
});

_tiene["default"].belongsTo(_productos["default"], {
  foreignKey: 'productos_id',
  sourceKey: 'id'
}); // M:N


_pedidos["default"].belongsToMany(_usuarios["default"], {
  through: 'realiza',
  foreignKey: 'pedidos_id'
});

_usuarios["default"].belongsToMany(_pedidos["default"], {
  through: 'realiza',
  foreignKey: 'usuarios_id'
}); // Parciales


_agentes_aduana["default"].hasMany(_asume["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_asume["default"].belongsTo(_agentes_aduana["default"], {
  foreignKey: 'agentes_aduana_id',
  sourceKey: 'id'
});

_observadores["default"].hasMany(_asume["default"], {
  foreignKey: 'observadores_id',
  sourceKey: 'id'
});

_asume["default"].belongsTo(_observadores["default"], {
  foreignKey: 'observadores_id',
  sourceKey: 'id'
});

_observaciones["default"].hasMany(_efectua["default"], {
  foreignKey: 'observaciones_id',
  sourceKey: 'id'
});

_efectua["default"].belongsTo(_observaciones["default"], {
  foreignKey: 'observaciones_id',
  sourceKey: 'id'
});

_observadores["default"].hasMany(_efectua["default"], {
  foreignKey: 'observadores_id',
  sourceKey: 'id'
});

_efectua["default"].belongsTo(_observadores["default"], {
  foreignKey: 'observadores_id',
  sourceKey: 'id'
});

_pedidos["default"].hasMany(_extrae["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_extrae["default"].belongsTo(_pedidos["default"], {
  foreignKey: 'pedidos_id',
  sourceKey: 'id'
});

_historial_precios["default"].hasMany(_extrae["default"], {
  foreignKey: 'historial_precios_id',
  sourceKey: 'id'
});

_extrae["default"].belongsTo(_historial_precios["default"], {
  foreignKey: 'historial_precios_id',
  sourceKey: 'id'
});