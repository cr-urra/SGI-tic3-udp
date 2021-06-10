const express = require('express');
const router = express.Router();
import * as detallesDolar from '../controllers/detalles_dolar.controller';

// detallesDolar

router.post('/', detallesDolar.createDetallesDolar);
router.get('/', detallesDolar.getAllDetallesDolar);

// detallesDolar/:id

router.put('/:id', detallesDolar.updateDetallesDolar);
router.delete('/:id', detallesDolar.deleteDetallesDolar);
router.get('/:id', detallesDolar.getDetallesDolarId);

module.exports = router;