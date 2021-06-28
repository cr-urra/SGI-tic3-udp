const express = require('express');
const router = express.Router();
import * as paises from '../controllers/paises.controller';

// paises

router.post('/', paises.createPaises);
router.get('/', paises.getAllPaises);
router.get('/all', paises.getAllPaisesWithFalse);

// paises/:id

router.put('/:id', paises.updatePaises);
router.put('/delete/:id', paises.deletePaises);
router.get('/:id', paises.getPaisesId);

module.exports = router;