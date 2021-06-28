const express = require('express');
const router = express.Router();
import * as efectua from '../controllers/efectua.controller';

// efectua

router.post('/', efectua.createEfectua);

// efectua/:id

router.delete('/:id', efectua.deleteEfectua);

module.exports = router;