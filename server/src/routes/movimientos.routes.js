const express = require('express');
const router = express.Router();
import * as movimientos from '../controllers/movimientos.controller';

// movimientos

router.post('/', movimientos.createMovimientos);
router.get('/', movimientos.getAllMovimientos);

// movimientos/:id

router.put('/:id', movimientos.updateMovimientos);
router.delete('/:id', movimientos.deleteMovimientos);
router.get('/:id', movimientos.getMovimientosId);

module.exports = router;