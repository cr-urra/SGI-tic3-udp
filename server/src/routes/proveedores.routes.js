const express = require('express');
const router = express.Router();
import * as proveedores from '../controllers/proveedores.controller';

// proveedores

router.post('/', proveedores.createProveedores);
router.get('/', proveedores.getAllProveedores);
router.get('/all', proveedores.getAllProveedoresWithFalse);

// proveedores/:id

router.put('/:id', proveedores.updateProveedores);
router.put('/delete/:id', proveedores.deleteProveedores);
router.get('/:id', proveedores.getProveedoresId);

module.exports = router;