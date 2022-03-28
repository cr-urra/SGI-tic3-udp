const express = require('express');
const router = express.Router();
import * as files from '../controllers/files.controller';

// files

router.get('/plantilla', files.sendPlantilla);
router.get('/xlsx', files.getXlsxImportMoney);
router.get('/orderImport/:id', files.getPdfOrderImport);
router.post('/setProductos', files.setProductos);
router.post('/setDocumentos/:id&:estado', files.setDocumentos);

module.exports = router;