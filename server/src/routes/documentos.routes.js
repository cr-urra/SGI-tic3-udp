const express = require('express');
const router = express.Router();
import * as documentos from '../controllers/documentos.controller';

// documentos

router.post('/', documentos.createDocumentos);
router.get('/', documentos.getAllDocumentos);
router.get('/all', documentos.getAllDocumentosWithFalse);

// documentos/:id

router.put('/:id', documentos.updateDocumentos);
router.put('/delete/:id', documentos.deleteDocumentos);
router.get('/:id', documentos.getDocumentosId);

module.exports = router;