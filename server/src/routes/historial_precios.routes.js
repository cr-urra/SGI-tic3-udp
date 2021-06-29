const express = require('express');
const router = express.Router();
import * as historialPrecios from '../controllers/historial_precios.controller';

// historialPrecios

router.post('/', historialPrecios.createHistorialPrecios);
router.get('/', historialPrecios.getAllHistorialPrecios);
router.get('/all', historialPrecios.getAllHistorialPreciosWithFalse);

// historialPrecios/:id

router.put('/:id', historialPrecios.updateHistorialPrecios);
router.put('/delete/:id', historialPrecios.deleteHistorialPrecios);
router.get('/:id', historialPrecios.getHistorialPreciosId);
router.get('/productos/:id', historialPrecios.getHistorialPreciosIdForProductosId);
router.get('/maxDate/:id', historialPrecios.getHistorialPreciosMaxDate);

module.exports = router;