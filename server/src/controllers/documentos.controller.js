import documentos from '../models/documentos';

export const createDocumentos = async (req, res) => {
    try{
        const {nombre_documento, pedidos_id} = req.body;
        let newDocumento = await documentos.create({
            nombre_documento, 
            pedidos_id
        },{
            fields: [
                'nombre_documento', 
                'pedidos_id'
            ]
        });
        res.json({
            resultado: true,
            message: "Documento creado correctamente",
            documentos: newDocumento
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            documentos: null
        });
    };
};


export const updateDocumentos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const documentoUpdate = await documentos.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Documento actualizado correctamente',
            resultado: true,
            documentos: documentoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            documentos: null
        });
    }
};

export const deleteDocumentos = async (req, res) => {
    try{
        const {id} = req.params;
        await documentos.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Documento eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    };
    
};

export const getAllDocumentos = async (req, res) => {
    try{
        const allDocumentos = await documentos.findAll({
            attributes: [
                'id',
                'nombre_documento', 
                'pedidos_id'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            documentos: allDocumentos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            documentos: null
        });
    };
};

export const getDocumentosId = async (req, res) => {
    try{
        const {id} = req.params;
        const documentos = await documentos.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'nombre_documento', 
                'pedidos_id'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            documentos: documentos
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            documentos: null
        });
    };
};