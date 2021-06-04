const express = require('express');
const router = express.Router();
import * as agentesAduana from '../controllers/agentes_aduana.controller';

// agentesAduana

router.post('/', agentesAduana.createAgentesAduana);
router.get('/', agentesAduana.getAllAgentesAduana);

// agentesAduana/:id

router.put('/:id', agentesAduana.updateAgentesAduana);
router.delete('/:id', agentesAduana.deleteAgentesAduana);
router.get('/:id', agentesAduana.getAgentesAduanaId);

module.exports = router;