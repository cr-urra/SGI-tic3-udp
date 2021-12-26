import xlsx from 'xlsx';
import productos from '../models/productos';

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