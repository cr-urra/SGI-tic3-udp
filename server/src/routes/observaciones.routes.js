const express = require('express');
const router = express.Router();
import * as observaciones from '../controllers/observaciones.controller';

// observaciones

router.post('/', observaciones.createObservaciones);
router.get('/', observaciones.getAllObservaciones);

// observaciones/:id

router.put('/:id', observaciones.updateObservaciones);
router.delete('/:id', observaciones.deleteObservaciones);
router.get('/:id', observaciones.getobservacionesId);

module.exports = router;