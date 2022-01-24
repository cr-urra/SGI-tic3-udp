import xlsx from 'xlsx';
import productos from '../models/productos';
import pdf from 'html-pdf';
import fs from 'fs';
import pedidos from '../models/pedidos';
import proveedores from '../models/proveedores';
import monedas from '../models/monedas';
import historial_precios from '../models/historial_precios';
import unidad_productos from '../models/unidad_productos';
import observaciones from '../models/observaciones';
import tiene from '../models/tiene';

export const sendPlantilla = async (req, res) => {
    try{
        res.sendFile(__dirname.replace('/controllers', '/files/')+'plantilla.xlsx');
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
            console.log();
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
            file.mv(__dirname.replace('/controllers', '/files/')+file.name);
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

export const getPdfOrderImport = async (req, res) => {
    try{
        const {id} = req.body;
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
                    model: proveedores,
                    include: [
                        monedas
                    ]
                }
            ]
        });

        let tables = ``;
        let pagesTotal = 1;
        let numberRowsObs = 38;
        let numberRowsProducts = 14 + 45;

        // Inicio tabla productos

        let limitRowFistPage = numberRowsProducts <= 7 ? 8 : 14; // Para evitar fallas técnicas, no poner como límite 16 o más.
        let limitRowLastPage = 20; // Para evitar fallas técnicas, no poner como límite 39 o más.
        let content = "";
        let pageBreak = null;
        let contPage = 1;
        let fila = 0;
        let suma = 0;

        while(suma <= numberRowsProducts - 1){
            content += `\n
                <tr>
                    <td>${suma+1}</td>
                    <td>3</td>
                    <td>KG</td>
                    <td>AB0${suma+1}</td>
                    <td>Descripción ${suma+1}</td>
                    <td>100</td>
                    <td>1000</td>
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
                            <th>Descripción de mercancias</th>
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
                            <td>10000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>TOTAL USD</td>
                            <td>10000</td>
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
            console.log("kljsd");
        };
        console.log(limitRowFistPage, (numberRowsProducts - 14) % 19);
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
                    <td>Problemas en contenedor ${suma+1}</td>
                    <td>01/01/2022</td>
                    <td>1000</td>
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
                            <th>Gasto</th>
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
                    <th>Gasto</th>
                </tr>
                ${content}
        \n`;

        // Fin tabla observaciones

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
                            width: 55%;
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
                            padding-left: 50px;
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
                            border: 1px solid #dddddd;
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
                            <img class="logo" src="https://promachile.cl/wp-content/uploads/2021/08/Group-1.svg">
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
                                <span class="ft-600 border-color-font">N°: 12-3493<br></span>
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
                            <span class="text-dark abs">01/01/2022</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <span class="text-dark abs">Crystal Master Test</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <span class="text-dark abs">11111111-1</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <!--<span class="text-dark abs">test</span>
                            <div class="content-value-underline"></div>
                            <br>-->
                            <span class="text-dark abs">CIF</span>
                            <div class="content-value-underline"></div>
                            <br>
                            <span class="text-dark abs">11/11/2022</span>
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
                                <span class="text-dark ft abs-text-footer">Crystal Master Test</span>
                            </div>
                        </footer>
                    </div>
                </body>
            </html>
        `;
        const config = {
            "format": "A4"
        };
        pdf.create(html, config).toFile(__dirname.replace('/controllers', '/files/')+'orden.pdf', (err, res) => {
            if (err) {
                res.json({
                    message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                    resultado: false
                });
            };
        });
        res.json({
            message: "xD", 
            resultado: true
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};