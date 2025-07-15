const express = require('express');
const router = express.Router();
const exitController = require('../controllers/exitController');

router.post('/', exitController.handleExit);

module.exports = router;
