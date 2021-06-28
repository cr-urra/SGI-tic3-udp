const express = require('express');
const router = express.Router();
import * as unidadProductos from '../controllers/unidad_productos.controller';

// unidadProductos

router.post('/', unidadProductos.createUnidadProductos);
router.get('/', unidadProductos.getAllUnidadProductos);
router.get('/all', unidadProductos.getAllUnidadProductosWithFalse);

// unidadProductos/:id

router.put('/:id', unidadProductos.updateUnidadProductos);
router.put('/delete/:id', unidadProductos.deleteUnidadProductos);
router.get('/:id', unidadProductos.getUnidadProductosId);

module.exports = router;