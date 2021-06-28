const express = require('express');
const router = express.Router();
import * as cuentasCorrientes from '../controllers/cuentas_corrientes.controller';

// cuentasCorrientes

router.post('/', cuentasCorrientes.createCuentasCorrientes);
router.get('/', cuentasCorrientes.getAllCuentasCorrientes);
router.get('/all', cuentasCorrientes.getAllCuentasCorrientesWithFalse);

// cuentasCorrientes/:id

router.put('/:id', cuentasCorrientes.updateCuentasCorrientes);
router.put('/delete/:id', cuentasCorrientes.deleteCuentasCorrientes);
router.get('/:id', cuentasCorrientes.getCuentasCorrientesId);

module.exports = router;