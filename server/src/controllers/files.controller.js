import xlsx from 'xlsx';
import productos from '../models/productos';
import pdf from 'html-pdf';
import pedidos from '../models/pedidos';
import historial_dolar from '../models/historial_dolar';
import detalles_dolar from '../models/detalles_dolar';
import historial_precios from '../models/historial_precios';
import unidad_productos from '../models/unidad_productos';
import observaciones from '../models/observaciones';
import tiene from '../models/tiene';
import proveedores from '../models/proveedores';
import sequelize from 'sequelize';
import documentos from '../models/documentos';

const maxDateProductPrice = async (producto) => {
    let datesPrecios = [];
    let precio = 0;
    producto.dataValues.historial_precios.forEach(element => {
        datesPrecios.push(element.dataValues.fecha);
    });
    const maxDate = new Date(Math.max.apply(null,datesPrecios));
    producto.dataValues.historial_precios.forEach(element => {
        if(String(element.dataValues.fecha) == String(maxDate)){
            precio = element.dataValues.precio;
        };
    });
    return precio;
};

const priceUsdTypeInitPedido = async (historialDolar) => {
    let dates = [];
    let valor = 0;
    historialDolar.forEach(element => {
        dates.push(element.dataValues.fecha);
    });
    const maxDate = new Date(Math.max.apply(null,dates));
    historialDolar.forEach(element => {
        if(String(element.dataValues.fecha) == String(maxDate)){
            valor = element.dataValues.detalles_dolar.dataValues.precio_compra;
        };
    });
    return valor;
};

export const sendPlantilla = async (req, res) => {
    try{
        res.sendFile(__dirname.replace('/controllers', '/files/templates/')+'plantilla.xlsx');
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            asume: null
        });
    };
};

export const getXlsxImportMoney = async (req, res) => {
    try{
        const spreadsheet = xlsx.readFile(__dirname.replace('/controllers', '/files/')+'newMID.xlsx');
        const sheets = spreadsheet.SheetNames;
        const sheet = spreadsheet.Sheets[sheets[0]];
        const prods = await productos.findAll({
            where: {
                vigencia: true,
                proveedores_id: 14
            },
            attributes: [
                'id', 
                'codigo', 
                'nombre',
                'tipo',
                'proveedores_id',
                'unidad_productos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        let cont = 2;
        prods.forEach(element => {
            xlsx.utils.sheet_add_aoa(sheet, [[element.dataValues.codigo]], {origin: "A"+cont.toString()});
            xlsx.utils.sheet_add_aoa(sheet, [[element.dataValues.nombre]], {origin: "B"+cont.toString()});
            xlsx.utils.sheet_add_aoa(sheet, [[0]], {origin: "C"+cont.toString()});
            xlsx.utils.sheet_add_aoa(sheet, [[0]], {origin: "D"+cont.toString()});
            cont += 1;
        });
        xlsx.writeFile(spreadsheet, __dirname.replace('/controllers', '/files/')+"planilla.xlsx");
        res.sendFile(__dirname.replace('/controllers', '/files/')+'planilla.xlsx');
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            asume: null
        });
    };
};


export const setProductos = async (req, res) => {
    try{
        if (!req.files) {
            res.json({
                resultado: false,
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
        } else {
            const file = req.files.file;
            await file.mv(__dirname.replace('/controllers', '/files/uploads/')+file.name);
            const excel = xlsx.readFile(__dirname.replace('/controllers', '/files/uploads/')+file.name);
            const sheet = excel.Sheets[excel.SheetNames[0]];
            let validar = true;
            let cont = 5;
            while(validar){
                if (sheet["B"+cont.toString()] !== undefined) {
                    const proveedor = await proveedores.findOne({
                        where: {
                            nombre: sheet["F"+cont.toString()].v,
                            vigencia: true
                        },
                        attributes: [
                            'id', 
                            'nombre', 
                            'direccion',
                            'correo',
                            'pais',
                            'monedas_id',
                            'rut',
                            'cuentas_bancos_id'
                        ]
                    });
                    const unidadProducto = await unidad_productos.findOne({
                        where: {
                            nombre_medida: sheet["H"+cont.toString()].v,
                            vigencia: true
                        },
                        attributes: [
                            'id',
                            'nombre_medida',
                            'valor_unidad'
                        ]
                    });
                    if (proveedor && unidadProducto) {
                        const producto = await productos.create({
                            codigo: sheet["B"+cont.toString()].v,
                            nombre: sheet["C"+cont.toString()].v,
                            tipo: sheet["G"+cont.toString()].v,
                            proveedores_id: proveedor.dataValues.id,
                            unidad_productos_id: unidadProducto.dataValues.id,
                            vigencia: true
                        },{
                            fields: [
                                'codigo',
                                'nombre',
                                'tipo',
                                'proveedores_id',
                                'unidad_productos_id',
                                'vigencia'
                            ]
                        });
                        const historialPrecio = await historial_precios.create({
                            precio: sheet["E"+cont.toString()].v, 
                            productos_id: producto.dataValues.id,
                            fecha: sequelize.literal('CURRENT_TIMESTAMP'),
                            vigencia: true
                        },{
                            fields: [
                                'precio', 
                                'productos_id',
                                'fecha',
                                'vigencia'
                            ]
                        });
                    } else {
                        res.json({
                            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                            resultado: false, 
                        });
                    }
                    cont += 1;
                } else {
                    validar = false;
                };
            };
            res.json({
                message: "Planilla subida correctamente", 
                resultado: true, 
            });
        };
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};

export const setDocumentos = async (req, res) => {
    try{
        if (!req.files) {
            res.json({
                resultado: false,
                message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });
        } else {
            for(let i = 0; i < req.files.files.length; i++) {
                const pedido = await pedidos.findOne({
                    where: {
                        id: req.params.id,
                        vigencia: true
                    },
                    attributes: [
                        'id',
                        'codigo'
                    ]
                });
                const name = "pedido_"+pedido.dataValues.codigo+"_"+"estado_"+req.params.estado+"_"+req.files.files[i].name;
                await req.files.files[i].mv(__dirname.replace('/controllers', '/files/documentos/')+name);
                const newDocumento = await documentos.create({
                    nombre_documento: name, 
                    pedidos_id: req.params.id,
                    vigencia: true
                },{
                    fields: [
                        'nombre_documento', 
                        'pedidos_id',
                        'vigencia'
                    ]
                });
            }
            res.json({resultado: true});
        };
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};

export const getPdfOrderImport = async (req, res) => {
    try{
        const {id} = req.params;
        const pedido = await pedidos.findOne({
            where: {
                id,
                vigencia: true
            },
            attributes: [
                'id',
                'codigo', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial',
                'seguro'
            ],
            include: [
                observaciones,
                proveedores,
                {
                    model: tiene,
                    include: [
                        {
                            model: productos,
                            include: [
                                historial_precios
                            ]
                        },
                        {
                            model: productos,
                            include: [
                                unidad_productos
                            ]
                        }
                    ]
                },
                {
                    model: historial_dolar,
                    include: [
                        detalles_dolar
                    ]
                }
            ]
        });
        let tables = ``;
        let pagesTotal = 1;
        let numberRowsObs = pedido.dataValues.observaciones.length;
        let numberRowsProducts = pedido.dataValues.tienes.length;

        // Inicio tabla productos

        let limitRowFistPage = numberRowsProducts <= 7 ? 8 : 14; // Para evitar fallas técnicas, no poner como límite 16 o más.
        let limitRowLastPage = 20; // Para evitar fallas técnicas, no poner como límite 39 o más.
        let content = "";
        let pageBreak = null;
        let contPage = 1;
        let fila = 0;
        let suma = 0;
        let sumaCantidad = 0;
        let sumaPrecioTotalUsd = 0;
        while(suma <= numberRowsProducts - 1){
            let precio = await maxDateProductPrice(pedido.dataValues.tienes[suma].dataValues.producto);
            let usd = await priceUsdTypeInitPedido(pedido.dataValues.historial_dolars);
            let precioUsd = precio*usd;
            let totalUsd = precioUsd*pedido.dataValues.tienes[suma].dataValues.cantidad;
            sumaCantidad += pedido.dataValues.tienes[suma].dataValues.cantidad;
            sumaPrecioTotalUsd += totalUsd;
            content += `\n
                <tr>
                    <td>${suma+1}</td>
                    <td>${pedido.dataValues.tienes[suma].dataValues.cantidad/pedido.dataValues.tienes[suma].dataValues.producto.dataValues.unidad_producto.dataValues.valor_unidad}</td>
                    <td>${pedido.dataValues.tienes[suma].dataValues.producto.dataValues.unidad_producto.dataValues.nombre_medida}</td>
                    <td>${pedido.dataValues.tienes[suma].dataValues.producto.dataValues.codigo}</td>
                    <td>${pedido.dataValues.tienes[suma].dataValues.producto.dataValues.nombre}</td>
                    <td>${precioUsd}</td>
                    <td>${totalUsd}</td>
                </tr>
            \n`;
            contPage == 1 ? pageBreak = limitRowFistPage > 0 && fila >= limitRowFistPage - 1 ? true : false : 
            pageBreak = fila >= limitRowLastPage - 1 ? true : false;
            if(pageBreak && suma < numberRowsProducts - 1) {
                content += `\n
                    </table>
                    <div style="page-break-before:always">&nbsp;</div>
                    <table class="ft">
                        <tr>
                            <th>Item N°</th>
                            <th>Cantidad</th>
                            <th>Unidad medida</th>
                            <th>Código</th>
                            <th>Descripción de mercancias</th>getPdfOrderImport
                            <th>Precio USD</th>
                            <th>Total</th>
                        </tr>
                \n`;
                pageBreak = false;
                contPage += 1;
                pagesTotal += 1;
                fila = 0;
            };
            fila++;
            suma++;
            if(suma > numberRowsProducts - 1){
                content += `\n
                        <tr>
                            <td>Total KG</td>
                            <td>${sumaCantidad}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>TOTAL USD</td>
                            <td>${sumaPrecioTotalUsd}</td>
                        </tr>
                    </table>
                \n`;
                if (numberRowsProducts > 7 && numberRowsProducts < 15) {
                    content += `\n
                        <div style="page-break-before:always">&nbsp;</div>
                    \n`
                    pagesTotal += 1
                }
            };
        };
        tables += `\n
            <table class="ft">
                <tr>
                    <th>Item N°</th>
                    <th>Cantidad</th>
                    <th>Unidad medida</th>
                    <th>Código</th>
                    <th>Descripción de mercancias</th>
                    <th>Precio USD</th>
                    <th>Total</th>
                </tr>
                ${content}
        \n`;

        // Fin tabla productos

        // Inicio tabla observaciones

        let tablesObs = ``;
        limitRowFistPage = numberRowsProducts <= 7 ? 8 - numberRowsProducts : 
        (numberRowsProducts - 14) % 19 <= 17 && (numberRowsProducts - 14) % 19 > 0 ? 17 - (numberRowsProducts - 14) % 19 : 19; 
        if ((limitRowFistPage == 19 || limitRowFistPage <= 0) && ((numberRowsProducts - 14) % 19 >= 17) || (numberRowsProducts - 14) % 19 == 0 && numberRowsProducts > 14){
            limitRowFistPage = 19;
            tables += `\n
                <div style="page-break-before:always">&nbsp;</div>
            \n`;
            pagesTotal += 1;
        };
        limitRowLastPage = 19 + 1; // Este parte desde 0, osea se debe sumar a la cantidad + 1
        content = "";
        pageBreak = null;
        contPage = 1;
        fila = 0;
        suma = 0;
        while(suma <= numberRowsObs - 1){
            content += `\n
                <tr>
                    <td>${suma+1}</td>
                    <td>${pedido.dataValues.observaciones[suma].dataValues.observacion}</td>
                    <td>${pedido.dataValues.observaciones[suma].dataValues.fecha}</td>
                </tr>
            \n`;
            contPage == 1 ? pageBreak = fila >= limitRowFistPage - 1 ? true : false : pageBreak = fila >= limitRowLastPage - 1 ? true : false;
            if(pageBreak && suma < numberRowsObs - 1) {
                content += `\n
                    </table>
                    <div style="page-break-before:always">&nbsp;</div>
                    <table class="ft">
                        <tr>
                            <th>Observación N°</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                        </tr>
                \n`;
                pageBreak = false;
                contPage += 1;
                pagesTotal += 1;
                fila = 0;
            };
            fila++;
            suma++;
            if(suma > numberRowsObs - 1){
                content += `\n
                    </table>
                \n`;
            };
        };
        tablesObs += `\n
            <table class="ft">
                <tr>
                    <th>Observación N°</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                </tr>
                ${content}
        \n`;

        // Fin tabla observaciones

        // Generación de documento

        const rut =  pedido.dataValues.proveedore.dataValues.rut;
        const fecha = `${new Date().getFullYear()}-${new Date().getMonth() + 1 <= 9 ? "0" +(new Date().getMonth() + 1).toString() : new Date().getMonth() + 1}-${new Date().getDate() <= 9 ? "0" +(new Date().getDate()).toString() : new Date().getDate()}`;
        const html = `
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Orden de importación</title>
                    <link 
                        rel="stylesheet" 
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
                        crossorigin="anonymous"
                    >
                    <style type="text/css">
                        .logo {
                            width: 93%;
                        }
                        .header {
                            padding-top: 50px;
                            padding-left: 50px;
                            width: 58.3%;
                        }
                        .center {
                            text-align: center;
                        }
                        .ft-600 {
                            font-weight: 600;
                        }
                        .border-order {
                            border-style: solid;
                            color:#2b5e11;
                            border-width: thin;
                        }
                        .border-color-font {
                            color: #4a9923;
                        }
                        .ft {
                            font-size: 7px;
                        }
                        .ftn {
                            font-size: 5px;
                        }
                        .plt {
                            padding-left: 35px;
                        }
                        .margin-content {
                            padding: 50px 0 0 170px;
                            margin-top: 2px;
                        }
                        .margin-content-value {
                            padding: 50px 0 0 0;
                            margin: 0 0 0 -120px;
                        }
                        .content-value-underline {
                            position: relative;
                            display: inline-block;
                            padding-bottom: 4px;
                        }
                        .content-value-underline:after {
                            position: absolute;
                            content: '';
                            left: 50%;
                            bottom: -2px;
                            width: 170px;
                            height: 1px;
                            background: black;
                            transform: translateX(-50%);
                        }
                        .footer-value-underline {
                            position: relative;
                            display: inline-block;
                            padding-bottom: 4px;
                        }
                        .footer-value-underline:after {
                            position: absolute;
                            content: '';
                            left: 50%;
                            bottom: -2px;
                            width: 100px;
                            height: 1px;
                            background: black;
                            transform: translateX(-50%);
                        }
                        .abs {
                            position: absolute;
                        }
                        table {
                            font-family: arial, sans-serif;
                            border-collapse: collapse;
                            width: 50%;
                            margin: 20px 0 0 50px;
                        }  
                        td, th {
                            border: 1px solid black;
                            text-align: left;
                            padding: 8px;
                        }  
                        tr:nth-child(even) {
                            background-color: #dddddd;
                        }
                        .title-table {
                            margin: 40px 0 0 50px;
                        }
                        .footer {
                            width: 50%;
                        }
                        .abs-text-footer {
                            position: absolute;
                            top: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="row header">
                        <div class="col-5 center">
                            <img class="logo" src="https://raw.githubusercontent.com/cr-urra/SGI-tic3-udp/main/server/src/files/media/logo.png">
                        </div>
                        <div class="col-5 text-dark ft plt">
                            <span class="ft-600">PROMACHILE LIMITADA <br></span>
                            <span class="ft-600">RUT ( ID Fiscal) 78.629.630-7 <br></span>
                            <span class="ft-600">Alcalde Guzmán 0121 Bodega G 34, Quilicura <br></span>
                            <span class="ft-600">CHILE <br></span>
                            <p class="ft-600">COD Postal: <br></p>
                            <p class="ft-600">56 (9) 98847879</p>
                        </div>
                        <div class="col-2">
                            <div class="ftn center border-order">
                                <span class="ft-600 border-color-font">ORDEN DE COMPRA <br></span>
                                <span class="ft-600 border-color-font">IMPORTACIÓN <br></span>
                                <span class="ft-600 border-color-font">N°: ${pedido.dataValues.codigo}<br></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5 ft margin-content">
                            <span class="text-dark">Fecha <br></span>
                            <span class="text-dark">Proveedor <br></span>
                            <span class="text-dark">RUT<br></span>
                            <!--<span class="text-dark">Atención <br></span>-->
                            <span class="text-dark">Forma de pago <br></span>
                            <span class="text-dark">Fecha de entrega</span>
                        </div>
                        <div class="col-7 ft margin-content-value">
                            <span class="text-dark abs">${fecha}</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <span class="text-dark abs">${pedido.dataValues.proveedore.dataValues.nombre}</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <span class="text-dark abs">${rut.substring(0, rut.length - 2)}-${rut[rut.length - 1]}</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <!--<span class="text-dark abs">test</span>
                            <div class="content-value-underline"></div>
                            <br>-->
                            <span class="text-dark abs">${pedido.dataValues.tipo_pago == "1" ? "Credito" : "Transferencia"}</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <span class="text-dark abs">${pedido.dataValues.fecha_inicial}</span>
                            <div class="content-value-underline"></div>
                        </div>
                    </div>
                    <!-- Seccion tablas html -->
                    <p class="title-table ft-600 ft">Solicita despachar lo siguiente:</p>
                    ${tables}
                    <p class="title-table ft-600 ft">Observaciones:</p>
                    ${tablesObs}
                    <!-- Fin seccion tablas html -->
                    <div id="pageFooter-${pagesTotal}">
                        <footer class="row footer">
                            <div class="col-3"></div>
                            <div class="col-3">
                                <div class="footer-value-underline"></div>
                                <span class="text-dark ft abs-text-footer">Moisés Paredes M.</span>
                            </div>
                            <div class="col-3"></div>
                            <div class="col-3">
                                <div class="footer-value-underline"></div>
                                <span class="text-dark ft abs-text-footer">${pedido.dataValues.proveedore.dataValues.nombre}</span>
                            </div>
                        </footer>
                    </div>
                </body>
            </html>
        `;
        const config = {
            "format": "A4"
        };
        pdf.create(html, config).toStream(function (err, stream) {
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
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};