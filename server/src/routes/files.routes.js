const express = require('express');
const router = express.Router();
import * as files from '../controllers/files.controller';

// files

router.get('/plantilla', files.sendPlantilla);
router.get('/xlsx', files.getXlsxImportMoney);
router.get('/orderImport/', files.getPdfOrderImport);
router.post('/setProductos', files.setProductos);

module.exports = router;