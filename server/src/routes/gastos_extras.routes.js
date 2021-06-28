const express = require('express');
const router = express.Router();
import * as gastosExtras from '../controllers/gastos_extras.controller';

// gastosExtras

router.post('/', gastosExtras.createGastosExtras);
router.get('/', gastosExtras.getAllGastosExtras);
router.get('/all', gastosExtras.getAllGastosExtrasWithFalse);

// gastosExtras/:id

router.put('/:id', gastosExtras.updateGastosExtras);
router.put('/delete/:id', gastosExtras.deleteGastosExtras);
router.get('/:id', gastosExtras.getGastosExtrasId);

module.exports = router;