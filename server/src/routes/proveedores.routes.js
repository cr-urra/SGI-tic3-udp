const express = require('express');
const router = express.Router();
import * as proveedores from '../controllers/proveedores.controller';

// proveedores

router.post('/', proveedores.createProveedores);
router.get('/', proveedores.getAllProveedores);

// proveedores/:id

router.put('/:id', proveedores.updateProveedores);
router.delete('/:id', proveedores.deleteProveedores);
router.get('/:id', proveedores.getProveedoresId);

module.exports = router;