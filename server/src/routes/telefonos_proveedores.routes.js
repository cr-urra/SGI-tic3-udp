const express = require('express');
const router = express.Router();
import * as telefonosProveedores from '../controllers/telefonos_proveedores.controller';

// telefonosProveedores

router.post('/', telefonosProveedores.createTelefonosProveedores);
router.get('/', telefonosProveedores.getAllTelefonosProveedores);
router.get('/all', telefonosProveedores.getAllTelefonosProveedoresWithFalse);

// telefonosProveedores/:id

router.put('/:id', telefonosProveedores.updateTelefonosProveedores);
router.put('/telefonos/:id', telefonosProveedores.deleteTelefonosProveedores);
router.get('/:id', telefonosProveedores.deleteTelefonosProveedores);

module.exports = router;