const express = require('express');
const router = express.Router();
import * as auth from '../controllers/auth.controller.js';
import * as verifySignUp from '../middlewares/verifySignUp.js';
import * as authJwt from '../middlewares/authJwt';

// auth

router.get('/', authJwt.verifyToken);
router.get('/adm', auth.verifyAdm);
router.get('/sup', auth.verifySup);
router.get('/usr', auth.verifyUsr);
router.post('/signin', auth.signIn);
router.get('/getRol', auth.getRol);
router.post('/signup', verifySignUp.verifyUser, auth.signUp);
router.get('/logout', auth.logOut);

module.exports = router;