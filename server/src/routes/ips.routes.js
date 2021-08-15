const express = require('express');
const router = express.Router();
import * as ips from '../controllers/ips.controller';

// ips

router.get('/', ips.getAllIps);

// ips/:id

router.put('/:id', ips.updateIps);

module.exports = router;