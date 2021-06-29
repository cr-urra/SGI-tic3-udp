const express = require('express');
const router = express.Router();
import * as tiene from '../controllers/tiene.controller';

// tiene

router.post('/', tiene.createTiene);

// tiene/:id

router.delete('/pedidos/:id', tiene.deleteTienePedidos);
router.delete('/productos/:id', tiene.deleteTieneProductos);
router.get('/pedidos/:id', tiene.getTiene);

module.exports = router;