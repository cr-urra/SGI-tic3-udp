const express = require('express');
const router = express.Router();
import * as historialPrecios from '../controllers/historial_precios.controller';

// historialPrecios

router.post('/', historialPrecios.createHistorialPrecios);
router.get('/', historialPrecios.getAllHistorialPrecios);

// historialPrecios/:id

router.put('/:id', historialPrecios.updateHistorialPrecios);
router.delete('/:id', historialPrecios.deleteHistorialPrecios);
router.get('/:id', historialPrecios.getHistorialPreciosId);

module.exports = router;