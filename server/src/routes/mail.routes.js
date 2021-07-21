const express = require('express');
const router = express.Router();
import * as mail from '../controllers/mail.controller';

// send

router.post('/test', mail.sendTest);

module.exports = router;