import documentos from '../models/documentos.model';

export const createDocumentos = async (req, res) => {
    try{
        const {nombre_documento, pedidos_id} = req.body;
        let newDocumento = await documentos.create({
            nombre_documento, 
            pedidos_id,
            vigencia: true
        },{
            fields: [
                'nombre_documento', 
                'pedidos_id',
                'vigencia'
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
            resultado: false
        });
    };
};


export const updateDocumentos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const documentoUpdate = await documentos.update(
            body
        ,
        {
            where: {
                id,
                vigencia: true
            }
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
        const documento = await documentos.findOne({
            where: {
                id
            },
            attributes: [
                'id',
                'nombre_documento', 
                'pedidos_id'
            ]
        });
        if(documento){
            const documentoUpdate = await documentos.update({
                vigencia: false
            },
            {
                where: {
                    id,
                    vigencia: true
                }
            }); 
            if(req.body.cascade) return {
                resultado: true
            }
            else res.json({
                resultado: true, 
                message: 'Documento eliminado correctamente'
            });
        } else {
            if(req.body.cascade) return {
                resultado: false
            }
            else res.json({
                resultado: true, 
                message: 'Documento no encontrado'
            });
        };
    }catch(e){
        console.log(e);
        if(req.body.cascade) return {
            resultado: false
        }
        else res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    };
    
};

export const getAllDocumentos = async (req, res) => {
    try{
        const allDocumentos = await documentos.findAll({
            where: {
                vigencia: true
            },
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
        const documento = await documentos.findOne({
            where: {
                id,
                vigencia: true
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
            documentos: documento
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

export const getAllDocumentosWithFalse = async (req, res) => {
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