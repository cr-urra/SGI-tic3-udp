const express = require('express');
const router = express.Router();
import * as usuarios from '../controllers/usuarios.controller';
import * as csrf from '../middlewares/authCsrf';

// usuarios

router.get('/', usuarios.getAllUsuarios);

// usuarios/:id

router.get('/:id', usuarios.getUsuariosId);
router.delete('/:id', usuarios.deleteUsuarios);
router.put('/:id', usuarios.updateUsuarios);

module.exports = router;