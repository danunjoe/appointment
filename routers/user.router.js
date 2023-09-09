const express = require('express')
const router = express.Router();
const { check, body, param } = require('express-validator')

var userController = require('../controllers/user.controller');

router.get('/list', [], userController.list);

router.post('/create', [
    body('name').exists().notEmpty(),
    body('email').exists().notEmpty(),
    body('password').exists().notEmpty(),
], userController.create);

router.post('/authen', [
    body('email').exists().notEmpty(),
    body('password').exists().notEmpty(),
], userController.authen);

module.exports = router