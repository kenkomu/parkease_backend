const express = require('express');
const router = express.Router();
const barrierController = require('../controllers/barrierController');

router.post('/open', barrierController.openBarrier);

module.exports = router;
