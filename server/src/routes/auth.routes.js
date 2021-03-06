const express = require('express');
const router = express.Router();
import * as auth from '../controllers/auth.controller';
import * as verifySignUp from '../middlewares/verifyUsr';
import * as authJwt from '../middlewares/authJwt';

// auth

router.get('/adm', auth.verifyAdm);
router.get('/sup', auth.verifySup);
router.get('/usr', auth.verifyUsr);
router.post('/signin',auth.signIn);
router.get('/getRol', auth.getRol);
router.post('/signup', auth.signUp);
router.get('/logout', auth.logOut);
router.get('/confirm/:token', auth.confirmUser);

module.exports = router;