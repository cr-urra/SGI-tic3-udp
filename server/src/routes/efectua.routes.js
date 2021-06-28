const express = require('express');
const router = express.Router();
import * as efectua from '../controllers/efectua.controller';

// efectua

router.post('/', efectua.createEfectua);

// efectua/:id

router.delete('/agentesAduana/:id', efectua.deleteEfectuaAgentesAduana);
router.delete('/observaciones/:id', efectua.deleteEfectuaObservaciones);

module.exports = router;