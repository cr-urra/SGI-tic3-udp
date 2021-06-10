const express = require('express');
const router = express.Router();
import * as bancosAgentesAduana from '../controllers/bancos_agentes_aduana.controller';

// bancosAgentesAduana

router.post('/', bancosAgentesAduana.createBancosAgentesAduana);
router.get('/', bancosAgentesAduana.getAllBancosAgentesAduana);

// bancosAgentesAduana/:id

router.put('/:id', bancosAgentesAduana.updateBancosAgentesAduana);
router.delete('/:id', bancosAgentesAduana.deleteBancosAgentesAduana);
router.get('/:id', bancosAgentesAduana.getBancosAgentesAduanaId);

module.exports = router;