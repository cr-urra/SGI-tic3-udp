"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProductos = exports.sendPlantilla = exports.getXlsxImportMoney = exports.getPdfOrderImport = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var _fs = _interopRequireDefault(require("fs"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _htmlPdf = _interopRequireDefault(require("html-pdf"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _historial_dolar = _interopRequireDefault(require("../models/historial_dolar"));

var _detalles_dolar = _interopRequireDefault(require("../models/detalles_dolar"));

var _historial_precios = _interopRequireDefault(require("../models/historial_precios"));

var _unidad_productos = _interopRequireDefault(require("../models/unidad_productos"));

var _observaciones = _interopRequireDefault(require("../models/observaciones"));

var _tiene = _interopRequireDefault(require("../models/tiene"));

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _console = require("console");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var maxDateProductPrice = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(producto) {
    var datesPrecios, precio, maxDate;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            datesPrecios = [];
            precio = 0;
            producto.dataValues.historial_precios.forEach(function (element) {
              datesPrecios.push(element.dataValues.fecha);
            });
            maxDate = new Date(Math.max.apply(null, datesPrecios));
            producto.dataValues.historial_precios.forEach(function (element) {
              if (String(element.dataValues.fecha) == String(maxDate)) {
                precio = element.dataValues.precio;
              }

              ;
            });
            return _context.abrupt("return", precio);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function maxDateProductPrice(_x) {
    return _ref.apply(this, arguments);
  };
}();

var priceUsdTypeInitPedido = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(historialDolar) {
    var dates, valor, maxDate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dates = [];
            valor = 0;
            historialDolar.forEach(function (element) {
              dates.push(element.dataValues.fecha);
            });
            maxDate = new Date(Math.max.apply(null, dates));
            historialDolar.forEach(function (element) {
              if (String(element.dataValues.fecha) == String(maxDate)) {
                valor = element.dataValues.detalles_dolar.dataValues.precio_compra;
              }

              ;
            });
            return _context2.abrupt("return", valor);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function priceUsdTypeInitPedido(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var sendPlantilla = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              res.sendFile(__dirname.replace('/controllers', '/files/templates/') + 'plantilla.xlsx');
            } catch (e) {
              console.log(e);
              res.json({
                message: "Ha ocurrido un error, porfavor contactese con el administrador",
                resultado: false,
                asume: null
              });
            }

            ;

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function sendPlantilla(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.sendPlantilla = sendPlantilla;

var getXlsxImportMoney = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var spreadsheet, sheets, sheet, prods, cont;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            spreadsheet = _xlsx["default"].readFile(__dirname.replace('/controllers', '/files/') + 'newMID.xlsx');
            sheets = spreadsheet.SheetNames;
            sheet = spreadsheet.Sheets[sheets[0]];
            _context4.next = 6;
            return _productos["default"].findAll({
              where: {
                vigencia: true,
                proveedores_id: 14
              },
              attributes: ['id', 'codigo', 'nombre', 'tipo', 'proveedores_id', 'unidad_productos_id'],
              order: [['id', 'DESC']]
            });

          case 6:
            prods = _context4.sent;
            cont = 2;
            prods.forEach(function (element) {
              _xlsx["default"].utils.sheet_add_aoa(sheet, [[element.dataValues.codigo]], {
                origin: "A" + cont.toString()
              });

              _xlsx["default"].utils.sheet_add_aoa(sheet, [[element.dataValues.nombre]], {
                origin: "B" + cont.toString()
              });

              _xlsx["default"].utils.sheet_add_aoa(sheet, [[0]], {
                origin: "C" + cont.toString()
              });

              _xlsx["default"].utils.sheet_add_aoa(sheet, [[0]], {
                origin: "D" + cont.toString()
              });

              cont += 1;
            });

            _xlsx["default"].writeFile(spreadsheet, __dirname.replace('/controllers', '/files/') + "planilla.xlsx");

            res.sendFile(__dirname.replace('/controllers', '/files/') + 'planilla.xlsx');
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              asume: null
            });

          case 17:
            ;

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function getXlsxImportMoney(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getXlsxImportMoney = getXlsxImportMoney;

var setProductos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var file, excel, sheet, validar, cont, proveedor, unidadProducto, producto, historialPrecio;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (req.files) {
              _context5.next = 5;
              break;
            }

            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
            _context5.next = 39;
            break;

          case 5:
            file = req.files.file;
            _context5.next = 8;
            return file.mv(__dirname.replace('/controllers', '/files/uploads/') + file.name);

          case 8:
            excel = _xlsx["default"].readFile(__dirname.replace('/controllers', '/files/uploads/') + file.name);
            sheet = excel.Sheets[excel.SheetNames[0]];
            validar = true;
            cont = 5;

          case 12:
            if (!validar) {
              _context5.next = 37;
              break;
            }

            if (!(sheet["B" + cont.toString()] !== undefined)) {
              _context5.next = 33;
              break;
            }

            _context5.next = 16;
            return _proveedores["default"].findOne({
              where: {
                nombre: sheet["F" + cont.toString()].v,
                vigencia: true
              },
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut', 'cuentas_bancos_id']
            });

          case 16:
            proveedor = _context5.sent;
            _context5.next = 19;
            return _unidad_productos["default"].findOne({
              where: {
                nombre_medida: sheet["H" + cont.toString()].v,
                vigencia: true
              },
              attributes: ['id', 'nombre_medida', 'valor_unidad']
            });

          case 19:
            unidadProducto = _context5.sent;

            if (!(proveedor && unidadProducto)) {
              _context5.next = 29;
              break;
            }

            _context5.next = 23;
            return _productos["default"].create({
              codigo: sheet["B" + cont.toString()].v,
              nombre: sheet["C" + cont.toString()].v,
              tipo: sheet["G" + cont.toString()].v,
              proveedores_id: proveedor.dataValues.id,
              unidad_productos_id: unidadProducto.dataValues.id,
              vigencia: true
            }, {
              fields: ['codigo', 'nombre', 'tipo', 'proveedores_id', 'unidad_productos_id', 'vigencia']
            });

          case 23:
            producto = _context5.sent;
            _context5.next = 26;
            return _historial_precios["default"].create({
              precio: sheet["E" + cont.toString()].v,
              productos_id: producto.dataValues.id,
              fecha: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              vigencia: true
            }, {
              fields: ['precio', 'productos_id', 'fecha', 'vigencia']
            });

          case 26:
            historialPrecio = _context5.sent;
            _context5.next = 30;
            break;

          case 29:
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 30:
            cont += 1;
            _context5.next = 34;
            break;

          case 33:
            validar = false;

          case 34:
            ;
            _context5.next = 12;
            break;

          case 37:
            ;
            res.json({
              message: "Planilla subida correctamente",
              resultado: true
            });

          case 39:
            ;
            _context5.next = 46;
            break;

          case 42:
            _context5.prev = 42;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 46:
            ;

          case 47:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 42]]);
  }));

  return function setProductos(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.setProductos = setProductos;

var getPdfOrderImport = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, pedido, tables, pagesTotal, numberRowsObs, numberRowsProducts, limitRowFistPage, limitRowLastPage, content, pageBreak, contPage, fila, suma, sumaCantidad, sumaPrecioTotalUsd, precio, usd, precioUsd, totalUsd, tablesObs, rut, fecha, html, config;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _pedidos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro'],
              include: [_observaciones["default"], _proveedores["default"], {
                model: _tiene["default"],
                include: [{
                  model: _productos["default"],
                  include: [_historial_precios["default"]]
                }, {
                  model: _productos["default"],
                  include: [_unidad_productos["default"]]
                }]
              }, {
                model: _historial_dolar["default"],
                include: [_detalles_dolar["default"]]
              }]
            });

          case 4:
            pedido = _context6.sent;
            tables = "";
            pagesTotal = 1;
            numberRowsObs = pedido.dataValues.observaciones.length;
            numberRowsProducts = pedido.dataValues.tienes.length; // Inicio tabla productos

            limitRowFistPage = numberRowsProducts <= 7 ? 8 : 14; // Para evitar fallas técnicas, no poner como límite 16 o más.

            limitRowLastPage = 20; // Para evitar fallas técnicas, no poner como límite 39 o más.

            content = "";
            pageBreak = null;
            contPage = 1;
            fila = 0;
            suma = 0;
            sumaCantidad = 0;
            sumaPrecioTotalUsd = 0;

          case 18:
            if (!(suma <= numberRowsProducts - 1)) {
              _context6.next = 39;
              break;
            }

            _context6.next = 21;
            return maxDateProductPrice(pedido.dataValues.tienes[suma].dataValues.producto);

          case 21:
            precio = _context6.sent;
            _context6.next = 24;
            return priceUsdTypeInitPedido(pedido.dataValues.historial_dolars);

          case 24:
            usd = _context6.sent;
            precioUsd = precio * usd;
            totalUsd = precioUsd * pedido.dataValues.tienes[suma].dataValues.cantidad;
            sumaCantidad += pedido.dataValues.tienes[suma].dataValues.cantidad;
            sumaPrecioTotalUsd += totalUsd;
            content += "\n\n                <tr>\n                    <td>".concat(suma + 1, "</td>\n                    <td>").concat(pedido.dataValues.tienes[suma].dataValues.cantidad / pedido.dataValues.tienes[suma].dataValues.producto.dataValues.unidad_producto.dataValues.valor_unidad, "</td>\n                    <td>").concat(pedido.dataValues.tienes[suma].dataValues.producto.dataValues.unidad_producto.dataValues.nombre_medida, "</td>\n                    <td>").concat(pedido.dataValues.tienes[suma].dataValues.producto.dataValues.codigo, "</td>\n                    <td>").concat(pedido.dataValues.tienes[suma].dataValues.producto.dataValues.nombre, "</td>\n                    <td>").concat(precioUsd, "</td>\n                    <td>").concat(totalUsd, "</td>\n                </tr>\n            \n");
            contPage == 1 ? pageBreak = limitRowFistPage > 0 && fila >= limitRowFistPage - 1 ? true : false : pageBreak = fila >= limitRowLastPage - 1 ? true : false;

            if (pageBreak && suma < numberRowsProducts - 1) {
              content += "\n\n                    </table>\n                    <div style=\"page-break-before:always\">&nbsp;</div>\n                    <table class=\"ft\">\n                        <tr>\n                            <th>Item N\xB0</th>\n                            <th>Cantidad</th>\n                            <th>Unidad medida</th>\n                            <th>C\xF3digo</th>\n                            <th>Descripci\xF3n de mercancias</th>getPdfOrderImport\n                            <th>Precio USD</th>\n                            <th>Total</th>\n                        </tr>\n                \n";
              pageBreak = false;
              contPage += 1;
              pagesTotal += 1;
              fila = 0;
            }

            ;
            fila++;
            suma++;

            if (suma > numberRowsProducts - 1) {
              content += "\n\n                        <tr>\n                            <td>Total KG</td>\n                            <td>".concat(sumaCantidad, "</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td>TOTAL USD</td>\n                            <td>").concat(sumaPrecioTotalUsd, "</td>\n                        </tr>\n                    </table>\n                \n");

              if (numberRowsProducts > 7 && numberRowsProducts < 15) {
                content += "\n\n                        <div style=\"page-break-before:always\">&nbsp;</div>\n                    \n";
                pagesTotal += 1;
              }
            }

            ;
            _context6.next = 18;
            break;

          case 39:
            ;
            tables += "\n\n            <table class=\"ft\">\n                <tr>\n                    <th>Item N\xB0</th>\n                    <th>Cantidad</th>\n                    <th>Unidad medida</th>\n                    <th>C\xF3digo</th>\n                    <th>Descripci\xF3n de mercancias</th>\n                    <th>Precio USD</th>\n                    <th>Total</th>\n                </tr>\n                ".concat(content, "\n        \n"); // Fin tabla productos
            // Inicio tabla observaciones

            tablesObs = "";
            limitRowFistPage = numberRowsProducts <= 7 ? 8 - numberRowsProducts : (numberRowsProducts - 14) % 19 <= 17 && (numberRowsProducts - 14) % 19 > 0 ? 17 - (numberRowsProducts - 14) % 19 : 19;

            if ((limitRowFistPage == 19 || limitRowFistPage <= 0) && (numberRowsProducts - 14) % 19 >= 17 || (numberRowsProducts - 14) % 19 == 0 && numberRowsProducts > 14) {
              limitRowFistPage = 19;
              tables += "\n\n                <div style=\"page-break-before:always\">&nbsp;</div>\n            \n";
              pagesTotal += 1;
            }

            ;
            limitRowLastPage = 19 + 1; // Este parte desde 0, osea se debe sumar a la cantidad + 1

            content = "";
            pageBreak = null;
            contPage = 1;
            fila = 0;
            suma = 0;

            while (suma <= numberRowsObs - 1) {
              content += "\n\n                <tr>\n                    <td>".concat(suma + 1, "</td>\n                    <td>").concat(pedido.dataValues.observaciones[suma].dataValues.observacion, "</td>\n                    <td>").concat(pedido.dataValues.observaciones[suma].dataValues.fecha, "</td>\n                    <td>").concat(pedido.dataValues.observaciones[suma].dataValues.gasto, "</td>\n                </tr>\n            \n");
              contPage == 1 ? pageBreak = fila >= limitRowFistPage - 1 ? true : false : pageBreak = fila >= limitRowLastPage - 1 ? true : false;

              if (pageBreak && suma < numberRowsObs - 1) {
                content += "\n\n                    </table>\n                    <div style=\"page-break-before:always\">&nbsp;</div>\n                    <table class=\"ft\">\n                        <tr>\n                            <th>Observaci\xF3n N\xB0</th>\n                            <th>Descripci\xF3n</th>\n                            <th>Fecha</th>\n                            <th>Gasto</th>\n                        </tr>\n                \n";
                pageBreak = false;
                contPage += 1;
                pagesTotal += 1;
                fila = 0;
              }

              ;
              fila++;
              suma++;

              if (suma > numberRowsObs - 1) {
                content += "\n\n                    </table>\n                \n";
              }

              ;
            }

            ;
            tablesObs += "\n\n            <table class=\"ft\">\n                <tr>\n                    <th>Observaci\xF3n N\xB0</th>\n                    <th>Descripci\xF3n</th>\n                    <th>Fecha</th>\n                    <th>Gasto</th>\n                </tr>\n                ".concat(content, "\n        \n"); // Fin tabla observaciones
            // Generación de documento

            rut = pedido.dataValues.proveedore.dataValues.rut;
            fecha = "".concat(new Date().getFullYear(), "-").concat(new Date().getMonth() + 1 <= 9 ? "0" + (new Date().getMonth() + 1).toString() : new Date().getMonth() + 1, "-").concat(new Date().getDate() <= 9 ? "0" + new Date().getDate().toString() : new Date().getDate());
            html = "\n            <!DOCTYPE html>\n            <html lang=\"es\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Orden de importaci\xF3n</title>\n                    <link \n                        rel=\"stylesheet\" \n                        href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" \n                        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" \n                        crossorigin=\"anonymous\"\n                    >\n                    <style type=\"text/css\">\n                        .logo {\n                            width: 93%;\n                        }\n                        .header {\n                            padding-top: 50px;\n                            padding-left: 50px;\n                            width: 58.3%;\n                        }\n                        .center {\n                            text-align: center;\n                        }\n                        .ft-600 {\n                            font-weight: 600;\n                        }\n                        .border-order {\n                            border-style: solid;\n                            color:#2b5e11;\n                            border-width: thin;\n                        }\n                        .border-color-font {\n                            color: #4a9923;\n                        }\n                        .ft {\n                            font-size: 7px;\n                        }\n                        .ftn {\n                            font-size: 5px;\n                        }\n                        .plt {\n                            padding-left: 35px;\n                        }\n                        .margin-content {\n                            padding: 50px 0 0 170px;\n                            margin-top: 2px;\n                        }\n                        .margin-content-value {\n                            padding: 50px 0 0 0;\n                            margin: 0 0 0 -120px;\n                        }\n                        .content-value-underline {\n                            position: relative;\n                            display: inline-block;\n                            padding-bottom: 4px;\n                        }\n                        .content-value-underline:after {\n                            position: absolute;\n                            content: '';\n                            left: 50%;\n                            bottom: -2px;\n                            width: 170px;\n                            height: 1px;\n                            background: black;\n                            transform: translateX(-50%);\n                        }\n                        .footer-value-underline {\n                            position: relative;\n                            display: inline-block;\n                            padding-bottom: 4px;\n                        }\n                        .footer-value-underline:after {\n                            position: absolute;\n                            content: '';\n                            left: 50%;\n                            bottom: -2px;\n                            width: 100px;\n                            height: 1px;\n                            background: black;\n                            transform: translateX(-50%);\n                        }\n                        .abs {\n                            position: absolute;\n                        }\n                        table {\n                            font-family: arial, sans-serif;\n                            border-collapse: collapse;\n                            width: 50%;\n                            margin: 20px 0 0 50px;\n                        }  \n                        td, th {\n                            border: 1px solid #dddddd;\n                            text-align: left;\n                            padding: 8px;\n                        }  \n                        tr:nth-child(even) {\n                            background-color: #dddddd;\n                        }\n                        .title-table {\n                            margin: 40px 0 0 50px;\n                        }\n                        .footer {\n                            width: 50%;\n                        }\n                        .abs-text-footer {\n                            position: absolute;\n                            top: 10px;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div class=\"row header\">\n                        <div class=\"col-5 center\">\n                            <img class=\"logo\" src=\"https://promachile.cl/wp-content/uploads/2021/08/Group-1.svg\">\n                        </div>\n                        <div class=\"col-5 text-dark ft plt\">\n                            <span class=\"ft-600\">PROMACHILE LIMITADA <br></span>\n                            <span class=\"ft-600\">RUT ( ID Fiscal) 78.629.630-7 <br></span>\n                            <span class=\"ft-600\">Alcalde Guzm\xE1n 0121 Bodega G 34, Quilicura <br></span>\n                            <span class=\"ft-600\">CHILE <br></span>\n                            <p class=\"ft-600\">COD Postal: <br></p>\n                            <p class=\"ft-600\">56 (9) 98847879</p>\n                        </div>\n                        <div class=\"col-2\">\n                            <div class=\"ftn center border-order\">\n                                <span class=\"ft-600 border-color-font\">ORDEN DE COMPRA <br></span>\n                                <span class=\"ft-600 border-color-font\">IMPORTACI\xD3N <br></span>\n                                <span class=\"ft-600 border-color-font\">N\xB0: ".concat(pedido.dataValues.codigo, "<br></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-5 ft margin-content\">\n                            <span class=\"text-dark\">Fecha <br></span>\n                            <span class=\"text-dark\">Proveedor <br></span>\n                            <span class=\"text-dark\">RUT<br></span>\n                            <!--<span class=\"text-dark\">Atenci\xF3n <br></span>-->\n                            <span class=\"text-dark\">Forma de pago <br></span>\n                            <span class=\"text-dark\">Fecha de entrega</span>\n                        </div>\n                        <div class=\"col-7 ft margin-content-value\">\n                            <span class=\"text-dark abs\">").concat(fecha, "</span>\n                            <div class=\"content-value-underline\"></div>\n                            <br>\n                            <span class=\"text-dark abs\">").concat(pedido.dataValues.proveedore.dataValues.nombre, "</span>\n                            <div class=\"content-value-underline\"></div>\n                            <br>\n                            <span class=\"text-dark abs\">").concat(rut.substring(0, rut.length - 2), "-").concat(rut[rut.length - 1], "</span>\n                            <div class=\"content-value-underline\"></div>\n                            <br>\n                            <!--<span class=\"text-dark abs\">test</span>\n                            <div class=\"content-value-underline\"></div>\n                            <br>-->\n                            <span class=\"text-dark abs\">").concat(pedido.dataValues.tipo_pago == "1" ? "Credito" : "Transferencia", "</span>\n                            <div class=\"content-value-underline\"></div>\n                            <br>\n                            <span class=\"text-dark abs\">").concat(pedido.dataValues.fecha_inicial, "</span>\n                            <div class=\"content-value-underline\"></div>\n                        </div>\n                    </div>\n                    <!-- Seccion tablas html -->\n                    <p class=\"title-table ft-600 ft\">Solicita despachar lo siguiente:</p>\n                    ").concat(tables, "\n                    <p class=\"title-table ft-600 ft\">Observaciones:</p>\n                    ").concat(tablesObs, "\n                    <!-- Fin seccion tablas html -->\n                    <div id=\"pageFooter-").concat(pagesTotal, "\">\n                        <footer class=\"row footer\">\n                            <div class=\"col-3\"></div>\n                            <div class=\"col-3\">\n                                <div class=\"footer-value-underline\"></div>\n                                <span class=\"text-dark ft abs-text-footer\">Mois\xE9s Paredes M.</span>\n                            </div>\n                            <div class=\"col-3\"></div>\n                            <div class=\"col-3\">\n                                <div class=\"footer-value-underline\"></div>\n                                <span class=\"text-dark ft abs-text-footer\">").concat(pedido.dataValues.proveedore.dataValues.nombre, "</span>\n                            </div>\n                        </footer>\n                    </div>\n                </body>\n            </html>\n        ");
            config = {
              "format": "A4"
            };

            _htmlPdf["default"].create(html, config).toStream(function (err, stream) {
              if (err) return res.send(err);
              res.type('pdf');
              stream.pipe(res);
            });
            /*pdf.create(html, config).toFile(__dirname.replace('/controllers', '/files/downloads/')+'orden.pdf', (err, res) => {
                if (err) {
                    res.json({
                        message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                        resultado: false
                    });
                };
            });*/
            //res.sendFile(__dirname.replace('/controllers', '/files/downloads/')+'orden.pdf');


            _context6.next = 65;
            break;

          case 61:
            _context6.prev = 61;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 65:
            ;

          case 66:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 61]]);
  }));

  return function getPdfOrderImport(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getPdfOrderImport = getPdfOrderImport;