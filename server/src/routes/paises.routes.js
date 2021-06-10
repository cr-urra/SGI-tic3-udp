const express = require('express');
const router = express.Router();
import * as paises from '../controllers/paises.controller';

// paises

router.post('/', paises.createPaises);
router.get('/', paises.getAllPaises);

// paises/:id

router.put('/:id', paises.updatePaises);
router.delete('/:id', paises.deletePaises);
router.get('/:id', paises.getPaisesId);

module.exports = router;