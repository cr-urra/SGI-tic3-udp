const express = require('express');
const router = express.Router();
import * as observadores from '../controllers/observadores.controller';

// observadores

router.post('/', observadores.createObservadores);
router.get('/', observadores.getAllObservadores);
router.get('/all', observadores.getAllObservadoresWithFalse);

// observadores/:id

router.put('/:id', observadores.updateObservadores);
router.put('/delete/:id', observadores.deleteObservadores);
router.get('/:id', observadores.getObservadoresId);

module.exports = router;