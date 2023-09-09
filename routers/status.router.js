const express = require('express')
const router = express.Router();

var statusController = require('../controllers/status.controller');

router.get('/list', [], statusController.list);

module.exports = router