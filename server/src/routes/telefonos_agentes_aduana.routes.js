const express = require('express');
const router = express.Router();
import * as telefonosAgentesAduana from '../controllers/telefonos_agentes_aduana.controller';

// telefonosAgentesAduana

router.post('/', telefonosAgentesAduana.createTelefonosAgentesAduana);
router.get('/', telefonosAgentesAduana.getAllTelefonosAgentesAduana);
router.get('/all', telefonosAgentesAduana.getAllTelefonosAgentesAduanaWithFalse);

// telefonosAgentesAduana/:id

router.put('/:id', telefonosAgentesAduana.updateTelefonosAgentesAduana);
router.put('/delete/:id', telefonosAgentesAduana.deleteTelefonosAgentesAduana);
router.get('/:id', telefonosAgentesAduana.deleteTelefonosAgentesAduana);
router.get('/agentes/:id', telefonosAgentesAduana.deleteTelefonosAgentesAduana);

module.exports = router;