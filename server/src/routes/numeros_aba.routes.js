const express = require('express');
const router = express.Router();
import * as numerosAba from '../controllers/numeros_aba.controller';

// numerosAba

router.post('/', numerosAba.createNumerosAba);
router.get('/', numerosAba.getAllNumerosAba);

// numerosAba/:id

router.put('/:id', numerosAba.updateNumerosAba);
router.delete('/:id', numerosAba.deleteNumerosAba);
router.get('/:id', numerosAba.getNumerosAbaId);

module.exports = router;