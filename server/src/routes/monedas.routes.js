const express = require('express');
const router = express.Router();
import * as monedas from '../controllers/monedas.controller';

// monedas

router.post('/', monedas.createMonedas);
router.get('/', monedas.getAllMonedas);
router.get('/all', monedas.getAllMonedasWithFalse);

// monedas/:id

router.put('/:id', monedas.updateMonedas);
router.delete('/:id', monedas.deleteMonedas);
router.get('/:id', monedas.getMonedasId);

module.exports = router;