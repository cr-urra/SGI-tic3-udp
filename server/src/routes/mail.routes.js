const express = require('express');
const router = express.Router();
import * as mail from '../controllers/mail.controller';

// mail

router.get('/test', mail.sendTest);

module.exports = router;