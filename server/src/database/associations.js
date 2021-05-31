import agentes_aduana from '../models/agentes_aduana'
import cuentas_bancos from '../models/cuentas_bancos';
import cuentas_corrientes from '../models/cuentas_corrientes';
import detalles_dolar from '../models/detalles_dolar';
import detalles_pedidos from '../models/detalles_pedidos';
import documentos from '../models/documentos';
import dolar_mensual from '../models/dolar_mensual';
import gastos_extras from '../models/gastos_extras';
import historial_dolar from '../models/historial_dolar';
import historial_precios from '../models/historial_precios';
import ips from '../models/ips';
import monedas from '../models/monedas';
import movimientos from '../models/movimientos'
import numeros_aba from '../models/numeros_aba';
import observaciones from '../models/observaciones';
import paises from '../models/paises';
import pedidos from '../models/pedidos';
import productos from '../models/productos';
import proveedores from '../models/proveedores';
import roles from '../models/roles';
import telefonos_agentes_aduana from '../models/telefonos_agentes_aduana';
import telefonos_proveedores from '../models/telefonos_proveedores';
import telefonos_usuarios from '../models/telefonos_usuarios';
import usuarios from '../models/usuarios';

// 1:1

pedidos.hasOne(detalles_pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});
detalles_pedidos.belongsTo(pedidos, {foreignKey: 'pedidos_id', sourceKey: 'id'});

productos.hasOne(historial_precios, {foreignKey: 'productos_id', sourceKey: 'id'});
historial_precios.belongsTo(productos, {foreignKey: 'productos_id', sourceKey: 'id'});

historial_dolar.hasOne(detalles_dolar, {foreignKey: 'historial_dolar_id', sourceKey: 'id'});
detalles_dolar.belongsTo(historial_dolar, {foreignKey: 'historial_dolar_id', sourceKey: 'id'});

agentes_aduana.hasOne(cuentas_corrientes, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});
cuentas_corrientes.belongsTo(agentes_aduana, {foreignKey: 'agentes_aduana_id', sourceKey: 'id'});

// 1:N

gastos_extras.hasMany(observaciones, {foreingKey: 'observaciones_id', sourceKey: 'id'});
observaciones.belongsTo(gastos_extras, {foreingKey: 'observaciones_id', sourceKey: 'id'});

gastos_extras.hasMany(pedidos, {foreingKey: 'pedidos_id', sourceKey: 'id'});
pedidos.belongsTo(gastos_extras, {foreingKey: 'pedidos_id', sourceKey: 'id'});

observaciones.hasMany(pedidos, {foreingKey: 'pedidos_id', sourceKey: 'id'});
pedidos.belongsTo(observaciones, {foreingKey: 'pedidos_id', sourceKey: 'id'});

telefonos_usuarios.hasMany(usuarios, {foreingKey: 'usuarios_id', sourceKey: 'id'});
usuarios.belongsTo(telefonos_usuarios, {foreingKey: 'usuarios_id', sourceKey: 'id'});

usuarios.hasMany(roles, {foreingKey: 'roles_id', sourceKey: 'id'});
roles.belongsTo(usuarios, {foreingKey: 'roles_id', sourceKey: 'id'});

historial_dolar.hasMany(dolar_mensual, {foreingKey: 'dolar_mensual_id', sourceKey: 'id'});
dolar_mensual.belongsTo(historial_dolar, {foreingKey: 'dolar_mensual_id', sourceKey: 'id'});

pedidos.hasMany(dolar_mensual, {foreingKey: 'dolar_mensual_id', sourceKey: 'id'});
dolar_mensual.belongsTo(pedidos, {foreingKey: 'dolar_mensual_id', sourceKey: 'id'});

pedidos.hasMany(agentes_aduana, {foreingKey: 'pedidos_id', sourceKey: 'id'});
agentes_aduana.belongsTo(pedidos, {foreingKey: 'pedidos_id', sourceKey: 'id'});

documentos.hasMany(pedidos, {foreingKey: 'pedidos_id', sourceKey: 'id'});
pedidos.belongsTo(documentos, {foreingKey: 'pedidos_id', sourceKey: 'id'});

pedidos.hasMany(cuentas_bancos, {foreingKey: 'pedidos_id', sourceKey: 'id'});
cuentas_bancos.belongsTo(pedidos, {foreingKey: 'pedidos_id', sourceKey: 'id'});

pedidos.hasMany(proveedores, {foreingKey: 'pedidos_id', sourceKey: 'id'});
proveedores.belongsTo(pedidos, {foreingKey: 'pedidos_id', sourceKey: 'id'});

proveedores.hasMany(monedas, {foreingKey: 'monedas_id', sourceKey: 'id'});
monedas.belongsTo(proveedores, {foreingKey: 'monedas_id', sourceKey: 'id'});

telefonos_proveedores.hasMany(proveedores, {foreingKey: 'proveedores_id', sourceKey: 'id'});
proveedores.belongsTo(telefonos_proveedores, {foreingKey: 'proveedores_id', sourceKey: 'id'});

cuentas_bancos.hasMany(paises, {foreingKey: 'paises_id', sourceKey: 'id'});
paises.belongsTo(cuentas_bancos, {foreingKey: 'paises_id', sourceKey: 'id'});

cuentas_bancos.hasMany(numeros_aba, {foreingKey: 'numeros_aba_id', sourceKey: 'id'});
numeros_aba.belongsTo(cuentas_bancos, {foreingKey: 'numeros_aba_id', sourceKey: 'id'});

productos.hasMany(proveedores, {foreingKey: 'proveedores_id', sourceKey: 'id'});
proveedores.belongsTo(productos, {foreingKey: 'proveedores_id', sourceKey: 'id'});

telefonos_agentes_aduana.hasMany(agentes_aduana, {foreingKey: 'agentes_aduana_id', sourceKey: 'id'});
agentes_aduana.belongsTo(telefonos_agentes_aduana, {foreingKey: 'agentes_aduana_id', sourceKey: 'id'});

movimientos.hasMany(cuentas_corrientes, {foreingKey: 'cuentas_corrientes_id', sourceKey: 'id'});
cuentas_corrientes.belongsTo(movimientos, {foreingKey: 'cuentas_corrientes_id', sourceKey: 'id'});

ips.hasMany(usuarios, {foreingKey: 'usuarios_id', sourceKey: 'id'});
usuarios.belongsTo(ips, {foreingKey: 'usuarios_id', sourceKey: 'id'});


// N:M

pedidos.belongToMany(usuarios, {through: 'realiza', foreignKey: 'usuarios_id'});
usuarios.belongToMany(pedidos, {through: 'realiza', foreignKey: 'pedidos_id'});

pedidos.belongToMany(productos, {through: 'tiene', foreignKey: 'productos_id'});
productos.belongToMany(pedidos, {through: 'tiene', foreignKey: 'pedidos_id'});

pedidos.belongToMany(historial_dolar, {through: 'cobra', foreignKey: 'historial_dolar_id'});
historial_dolar.belongToMany(pedidos, {through: 'cobra', foreignKey: 'pedidos_id'});