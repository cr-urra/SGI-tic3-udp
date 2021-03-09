const express = require('express');
const router = express.Router();
import {signIn, signUp, verifyAdm, verifySup, verifyUsr, logOut} from '../controllers/auth.controller.js';
import * as verifySignUp from '../middlewares/verifySignUp.js';
import * as authJwt from '../middlewares/authJwt';

// auth

router.get('/', authJwt.verifyToken);
router.get('/adm/', verifyAdm);
router.get('/sup/', verifySup);
router.get('/usr/', verifyUsr);
router.post('/signin', signIn);
router.post('/signup', verifySignUp.verifyUser, signUp);
router.get('/logout', logOut);


module.exports = router;