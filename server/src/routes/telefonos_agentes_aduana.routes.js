const express = require('express');
const router = express.Router();
import * as telefonosAgentesAduana from '../controllers/telefonos_agentes_aduana.controller';

// telefonosAgentesAduana

router.post('/', telefonosAgentesAduana.createTelefonosAgentesAduana);
router.get('/', telefonosAgentesAduana.getAllTelefonosAgentesAduana);

// telefonosAgentesAduana/:id

router.put('/:id', telefonosAgentesAduana.updateTelefonosAgentesAduana);
router.delete('/:id', telefonosAgentesAduana.deleteTelefonosAgentesAduana);
router.get('/:id', telefonosAgentesAduana.deleteTelefonosAgentesAduana);

module.exports = router;