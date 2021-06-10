const express = require('express');
const router = express.Router();
import * as historialDolar from '../controllers/historial_dolar.controller';

// historialDolar

router.post('/', historialDolar.createHistorialDolar);
router.get('/', historialDolar.getAllHistorialDolar);

// historialDolar/:id

router.put('/:id', historialDolar.updateHistorialDolar);
router.delete('/:id', historialDolar.deleteHistorialDolar);
router.get('/:id', historialDolar.getHistorialDolarId);

module.exports = router;