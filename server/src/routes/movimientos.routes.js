const express = require('express');
const router = express.Router();
import * as movimientos from '../controllers/movimientos.controller';

// movimientos

router.post('/', movimientos.createMovimientos);
router.get('/', movimientos.getAllMovimientos);
router.get('/all', movimientos.getAllMovimientosWithFalse);

// movimientos/:id

router.put('/:id', movimientos.updateMovimientos);
router.put('/delete/:id', movimientos.deleteMovimientos);
router.get('/:id', movimientos.getMovimientosId);

module.exports = router;