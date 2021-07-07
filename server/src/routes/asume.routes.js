const express = require('express');
const router = express.Router();
import * as asume from '../controllers/asume.controller';

// asume

router.post('/', asume.createAsume);

// asume/:id

router.delete('/observadores/:id', asume.deleteAsumeObservadores);
router.delete('/agentesAduana/:id', asume.deleteAsumeAgentesAduana);

module.exports = router;