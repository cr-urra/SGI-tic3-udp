const express = require('express');
const router = express.Router();
import * as extrae from '../controllers/extrae.controller';

// extrae

router.post('/', extrae.createExtrae);

// extrae/:id

router.delete('/pedidos/:id', extrae.deleteExtraePedidos);
router.delete('/historialPrecios/:id', extrae.deleteExtraeHistorialPrecios);

module.exports = router;