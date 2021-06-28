const express = require('express');
const router = express.Router();
import * as agentesAduana from '../controllers/agentes_aduana.controller';

// agentesAduana

router.post('/', agentesAduana.createAgentesAduana);
router.get('/', agentesAduana.getAllAgentesAduana);
router.get('/all', agentesAduana.getAllAgentesAduanaWithFalse);

// agentesAduana/:id

router.put('/:id', agentesAduana.updateAgentesAduana);
router.put('/delete/:id', agentesAduana.deleteAgentesAduana);
router.get('/:id', agentesAduana.getAgentesAduanaId);

module.exports = router;