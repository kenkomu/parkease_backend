const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');

router.post('/', entryController.logEntry);

module.exports = router;
