const express = require('express');
const router = express.Router();
import * as dolarMensual from '../controllers/dolar_mensual.controller';

// dolarMensual

router.post('/', dolarMensual.createDolarMensual);
router.get('/', dolarMensual.getAllDolarMensual);

// dolarMensual/:id

router.put('/:id', dolarMensual.updateDolarMensual);
router.delete('/:id', dolarMensual.deleteDolarMensual);
router.get('/:id', dolarMensual.getDolarMensualId);

module.exports = router;