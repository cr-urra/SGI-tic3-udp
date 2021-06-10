const express = require('express');
const router = express.Router();
import * as efectua from '../controllers/efectua.controller';

// efectua

router.post('/', efectua.createEfectua);
router.get('/', efectua.getAllEfectua);

// efectua/:id

router.put('/:id', efectua.updateEfectua);
router.delete('/:id', efectua.deleteEfectua);
router.get('/:id', efectua.getEfectuaId);

module.exports = router;