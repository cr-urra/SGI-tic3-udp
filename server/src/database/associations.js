import agentes_aduana from '../models/agentes_aduana.model'
import cuentas_bancos from '../models/cuentas_bancos.model';
import cuentas_corrientes from '../models/cuentas_corrientes.model';
import detalles_dolar from '../models/detalles_dolar.model';
import detalles_pedidos from '../models/detalles_pedidos.model';
import documentos from '../models/documentos.model';
import dolar_mensual from '../models/dolar_mensual.model';
import gastos_extras from '../models/gastos_extras.model';
import historial_dolar from '../models/historial_dolar.model';
import historial_precios from '../models/historial_precios.model';
import monedas from '../models/monedas.model';
import movimientos from '../models/movimientos.model'
import numeros_aba from '../models/numeros_aba.model';
import observaciones from '../models/observaciones.model';
import observadores from '../models/observadores.model';
import paises from '../models/paises.model';
import pedidos from '../models/pedidos.model';
import productos from '../models/productos.model';
import proveedores from '../models/proveedores.model';
import roles from '../models/roles.model';
import telefonos_agentes_aduana from '../models/telefonos_agentes_aduana.model';
import telefonos_proveedores from '../models/telefonos_proveedores.model';
import telefonos_usuarios from '../models/telefonos_usuarios.model';
import usuarios from '../models/usuarios.model';
import bancos_agentes_aduana from '../models/bancos_agentes_aduana.model';
import efectua from '../models/efectua.model';
import unidad_productos from '../models/unidad_productos.model';
import tiene from '../models/tiene.model';
import asume from '../models/asume.model';
import extrae from '../models/extrae.model';

// 1:1

pedidos.hasOne(detalles_pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});
detalles_pedidos.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

cuentas_bancos.hasOne(proveedores, {foreignKey: 'cuentas_bancos_id', sourceKey: 'id'});
proveedores.belongsTo(cuentas_bancos, {foreignKey: 'cuentas_bancos_id', sourceKey: 'id'});

historial_dolar.hasOne(detalles_dolar, {foreignKey: 'historial_dolar_id', sourceKey: 'id'});
detalles_dolar.belongsTo(historial_dolar, {foreignKey: 'historial_dolar_id', sourceKey: 'id'});

agentes_aduana.hasOne(cuentas_corrientes, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
cuentas_corrientes.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

agentes_aduana.hasOne(bancos_agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
bancos_agentes_aduana.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

// 1:N

productos.hasMany(historial_precios, {foreignKey: 'productos_id', sourceKey: 'id'});
historial_precios.belongsTo(productos, {foreignKey: 'productos_id', sourceKey: 'id'});

unidad_productos.hasMany(productos, {foreignKey: 'unidad_productos_id', sourceKey: 'id'});
productos.belongsTo(unidad_productos, {foreignKey: 'unidad_productos_id', sourceKey: 'id'});

observaciones.hasMany(gastos_extras, {foreignKey: 'observaciones_id', sourceKey: 'id'});
gastos_extras.belongsTo(gastos_extras, {foreignKey: 'observaciones_id', sourceKey: 'id'});

pedidos.hasMany(gastos_extras, {foreignKey: 'pedidos_id', sourceKey: 'id'});
gastos_extras.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

pedidos.hasMany(observaciones, {foreignKey: 'pedidos_id', sourceKey: 'id'});
observaciones.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

usuarios.hasMany(telefonos_usuarios, {foreignKey: 'usuarios_id', sourceKey: 'id'});
telefonos_usuarios.belongsTo(usuarios, {foreignKey: 'usuarios_id', sourceKey: 'id'});

roles.hasMany(usuarios, {foreignKey: 'roles_id', sourceKey: 'id'});
usuarios.belongsTo(roles, {foreignKey: 'roles_id', sourceKey: 'id'});

dolar_mensual.hasMany(pedidos, {foreignKey: 'dolar_mensual_id', sourceKey: 'id'});
pedidos.belongsTo(dolar_mensual, {foreignKey: 'dolar_mensual_id', sourceKey: 'id'});

agentes_aduana.hasMany(pedidos, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
pedidos.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

pedidos.hasMany(documentos, {foreignKey: 'pedidos_id', sourceKey: 'id'});
documentos.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

cuentas_bancos.hasMany(pedidos, {foreignKey: 'cuentas_bancos_id', sourceKey: 'id'});
pedidos.belongsTo(cuentas_bancos, {foreignKey: 'cuentas_bancos_id', sourceKey: 'id'});

proveedores.hasMany(pedidos, {foreignKey: 'proveedores_id', sourceKey: 'id'});
pedidos.belongsTo(proveedores, {foreignKey: 'proveedores_id', sourceKey: 'id'});

monedas.hasMany(proveedores, {foreignKey: 'monedas_id', sourceKey: 'id'});
proveedores.belongsTo(monedas, {foreignKey: 'monedas_id', sourceKey: 'id'});

proveedores.hasMany(telefonos_proveedores, {foreignKey: 'proveedores_id', sourceKey: 'id'});
telefonos_proveedores.belongsTo(proveedores, {foreignKey: 'proveedores_id', sourceKey: 'id'});

paises.hasMany(cuentas_bancos, {foreignKey: 'paises_id', sourceKey: 'id'});
cuentas_bancos.belongsTo(paises, {foreignKey: 'paises_id', sourceKey: 'id'});

numeros_aba.hasMany(cuentas_bancos, {foreignKey: 'numeros_aba_id', sourceKey: 'id'});
cuentas_bancos.belongsTo(numeros_aba, {foreignKey: 'numeros_aba_id', sourceKey: 'id'});

proveedores.hasMany(productos, {foreignKey: 'proveedores_id', sourceKey: 'id'});
productos.belongsTo(proveedores, {foreignKey: 'proveedores_id', sourceKey: 'id'});

agentes_aduana.hasMany(telefonos_agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
telefonos_agentes_aduana.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

agentes_aduana.hasMany(telefonos_agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
telefonos_agentes_aduana.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

cuentas_corrientes.hasMany(movimientos, {foreignKey: 'cuentas_corrientes_id', sourceKey: 'id'});
movimientos.belongsTo(cuentas_corrientes, {foreignKey: 'cuentas_corrientes_id', sourceKey: 'id'});

pedidos.hasMany(historial_dolar, {foreignKey: 'pedidos_id', sourceKey: 'id'});
historial_dolar.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

dolar_mensual.hasMany(historial_dolar, {foreignKey: 'dolar_mensual_id', sourceKey: 'id'});
historial_dolar.belongsTo(dolar_mensual, {foreignKey: 'dolar_mensual_id', sourceKey: 'id'});

pedidos.hasMany(tiene, {foreignKey: 'pedidos_id', sourceKey: 'id'});
tiene.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

productos.hasMany(tiene, {foreignKey: 'productos_id', sourceKey: 'id'});
tiene.belongsTo(productos, {foreignKey: 'productos_id', sourceKey: 'id'});

// M:N

pedidos.belongsToMany(usuarios, {through: 'realiza', foreignKey: 'pedidos_id'});
usuarios.belongsToMany(pedidos, {through: 'realiza', foreignKey: 'usuarios_id'});

// Parciales

agentes_aduana.hasMany(asume, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
asume.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

observadores.hasMany(asume, {foreignKey: 'observadores_id', sourceKey: 'id'});
asume.belongsTo(observadores, {foreignKey: 'observadores_id', sourceKey: 'id'});

observaciones.hasMany(efectua, {foreignKey: 'observaciones_id', sourceKey: 'id'});
efectua.belongsTo(observaciones, {foreignKey: 'observaciones_id', sourceKey: 'id'});

observadores.hasMany(efectua, {foreignKey: 'observadores_id', sourceKey: 'id'});
efectua.belongsTo(observadores, {foreignKey: 'observadores_id', sourceKey: 'id'});

pedidos.hasMany(extrae, {foreignKey: 'pedidos_id', sourceKey: 'id'});
extrae.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

historial_precios.hasMany(extrae, {foreignKey: 'historial_precios_id', sourceKey: 'id'});
extrae.belongsTo(historial_precios, {foreignKey: 'historial_precios_id', sourceKey: 'id'});


