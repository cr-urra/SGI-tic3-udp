const express = require('express');
const router = express.Router();
import * as productos from '../controllers/productos.controller';

// productos

router.post('/', productos.createProductos);
router.get('/', productos.getAllProductos);
router.get('/all', productos.getAllProductosWithFalse);

// productos/:id

router.put('/:id', productos.updateProductos);
router.put('/delete/:id', productos.deleteProductos);
router.get('/:id', productos.getProductosId);

module.exports = router;