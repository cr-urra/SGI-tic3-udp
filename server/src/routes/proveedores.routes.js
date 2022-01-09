const express = require('express');
const router = express.Router();
import * as proveedores from '../controllers/proveedores.controller';
import * as verifyDelete from '../middlewares/verifyDelete';

// proveedores

router.post('/', proveedores.createProveedores);
router.get('/', proveedores.getAllProveedores);
router.get('/all', proveedores.getAllProveedoresWithFalse);

// proveedores/:id

router.put('/:id', proveedores.updateProveedores);
router.put('/delete/:id', verifyDelete.verifyProveedores, proveedores.deleteProveedores);
router.get('/:id', proveedores.getProveedoresId);

module.exports = router;