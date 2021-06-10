const express = require('express');
const router = express.Router();
import * as documentos from '../controllers/documentos.controller';

// documentos

router.post('/', documentos.createDocumentos);
router.get('/', documentos.getAllDocumentos);

// documentos/:id

router.put('/:id', documentos.updateDocumentos);
router.delete('/:id', documentos.deleteDocumentos);
router.get('/:id', documentos.getDocumentosId);

module.exports = router;