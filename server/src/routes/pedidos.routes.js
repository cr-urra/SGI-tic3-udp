const express = require('express');
const router = express.Router();
import * as pedidos from '../controllers/pedidos.controller';

// pedidos

router.post('/', pedidos.createPedidos);
router.get('/', pedidos.getAllPedidos);

// pedidos/:id

router.put('/:id', pedidos.updatePedidos);
router.delete('/:id', pedidos.deletePedidos);
router.get('/:id', pedidos.getPedidosId);

module.exports = router;