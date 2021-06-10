const express = require('express');
const router = express.Router();
import * as unidadProductos from '../controllers/unidad_productos.controller';

// unidadProductos

router.post('/', unidadProductos.createUnidadProductos);
router.get('/', unidadProductos.getAllUnidadProductos);

// unidadProductos/:id

router.put('/:id', unidadProductos.updateUnidadProductos);
router.delete('/:id', unidadProductos.deleteUnidadProductos);
router.get('/:id', unidadProductos.getUnidadProductosId);

module.exports = router;