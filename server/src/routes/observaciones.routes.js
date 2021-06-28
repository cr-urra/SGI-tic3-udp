const express = require('express');
const router = express.Router();
import * as observaciones from '../controllers/observaciones.controller';

// observaciones

router.post('/', observaciones.createObservaciones);
router.get('/', observaciones.getAllObservaciones);
router.get('/all', observaciones.getAllObservacionesWithFalse);

// observaciones/:id

router.put('/:id', observaciones.updateObservaciones);
router.put('/delete/:id', observaciones.deleteObservaciones);
router.get('/:id', observaciones.getObservacionesId);

module.exports = router;