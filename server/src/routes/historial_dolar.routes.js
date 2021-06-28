const express = require('express');
const router = express.Router();
import * as historialDolar from '../controllers/historial_dolar.controller';

// historialDolar

router.post('/', historialDolar.createHistorialDolar);
router.get('/', historialDolar.getAllHistorialDolar);
router.get('/all', historialDolar.getAllHistorialDolar);

// historialDolar/:id

router.put('/:id', historialDolar.updateHistorialDolar);
router.put('/delete/:id', historialDolar.deleteHistorialDolar);
router.get('/:id', historialDolar.getHistorialDolarId);

module.exports = router;