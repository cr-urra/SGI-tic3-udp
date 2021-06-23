const express = require('express');
const router = express.Router();
import * as roles from '../controllers/roles.controller';

// roles

router.get('/', roles.getAllRoles);

// roles/:id

router.put('/:id', roles.updateRoles);
router.get('/:id', roles.getRolesId);

module.exports = router;