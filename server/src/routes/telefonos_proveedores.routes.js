const express = require('express');
const router = express.Router();
import * as telefonosProveedores from '../controllers/telefonos_proveedores.controller';

// telefonosProveedores

router.post('/', telefonosProveedores.createTelefonosProveedores);
router.get('/', telefonosProveedores.getAllTelefonosProveedores);

// telefonosProveedores/:id

router.put('/:id', telefonosProveedores.updateTelefonosProveedores);
router.delete('/:id', telefonosProveedores.deleteTelefonosProveedores);
router.get('/:id', telefonosProveedores.deleteTelefonosProveedores);

module.exports = router;