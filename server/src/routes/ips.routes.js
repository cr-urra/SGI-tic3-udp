const express = require('express');
const router = express.Router();
import * as ips from '../controllers/ips.controller';

// ips

router.post('/', ips.createIps);
router.get('/', ips.getAllIps);
router.get('/all', ips.getAllIpsWithFalse);

// ips/:id

router.put('/:id', ips.updateIps);
router.put('/delete/:id', ips.deleteIps);
router.get('/:id', ips.getIpsId);

module.exports = router;