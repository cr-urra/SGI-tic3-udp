const express = require('express');
const router = express.Router();
import * as roles from '../controllers/roles.controller.js';

// roles

router.post('/', roles.createRoles);
router.get('/', roles.getAllRoles);

// roles/:id

router.put('/:id', roles.updateRoles);
router.delete('/:id', roles.deleteRoles);
router.get('/:id', roles.getRolesId);

module.exports = router;