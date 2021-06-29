const express = require('express');
const router = express.Router();
import * as telefonosUsuarios from '../controllers/telefonos_usuarios.controller';

// telefonosusuarios

router.post('/', telefonosUsuarios.createTelefonosUsuarios);
router.get('/', telefonosUsuarios.getAllTelefonosUsuarios);

// telefonosusuarios/:id

router.put('/:id', telefonosUsuarios.updateTelefonosUsuarios);
router.delete('/:id', telefonosUsuarios.deleteTelefonosUsuarios);
router.get('/:id', telefonosUsuarios.getTelefonosUsuariosId);
router.get('/usuarios/:id', telefonosUsuarios.getTelefonosUsuariosIdForUsuariosId);

module.exports = router;