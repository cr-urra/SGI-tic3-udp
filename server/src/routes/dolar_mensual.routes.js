const express = require('express');
const router = express.Router();
import * as dolarMensual from '../controllers/dolar_mensual.controller';

// dolarMensual

router.post('/', dolarMensual.createDolarMensual);
router.get('/', dolarMensual.getAllDolarMensual);
router.get('/all', dolarMensual.getAllDolarMensualWithFalse);

// dolarMensual/:id

router.put('/:id', dolarMensual.updateDolarMensual);
router.put('/delete/:id', dolarMensual.deleteDolarMensual);
router.get('/:id', dolarMensual.getDolarMensualId);

module.exports = router;