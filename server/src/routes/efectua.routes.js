const express = require('express');
const router = express.Router();
import * as efectua from '../controllers/efectua.controller';

// efectua

router.post('/', efectua.createEfectua);

// efectua/:id

router.delete('/observadores/:id', efectua.deleteEfectuaObservadores);
router.delete('/observaciones/:id', efectua.deleteEfectuaObservaciones);

module.exports = router;