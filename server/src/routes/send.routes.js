const express = require('express');
const router = express.Router();
import * as send from '../controllers/send.controller';

// sned

router.post('/', send.sendTest);

module.exports = router;