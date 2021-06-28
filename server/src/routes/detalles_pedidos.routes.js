const express = require('express');
const router = express.Router();
import * as detallesPedidos from '../controllers/detalles_pedidos.controller';

// detallesPedidos

router.post('/', detallesPedidos.createDetallesPedidos);
router.get('/', detallesPedidos.getAllDetallesPedidos);
router.get('/all', detallesPedidos.getAllDetallesPedidosWithFalse);

// detallesPedidos/:id

router.put('/:id', detallesPedidos.updateDetallesPedidos);
router.put('/delete/:id', detallesPedidos.deleteDetallesPedidos);
router.get('/:id', detallesPedidos.getDetallesPedidosId);

module.exports = router;