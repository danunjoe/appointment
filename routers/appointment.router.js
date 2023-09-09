const express = require('express')
const router = express.Router();

const { param, body, query } = require('express-validator');

var appointmentController = require('../controllers/appointment.controller');

router.get('/list', [
    // query('offset').exists().notEmpty().isInt(),
    // query('limit').exists().notEmpty().isInt(),
], appointmentController.list);

router.get('/retreive/:id', [], appointmentController.retreive);

router.post('/comment', [
    body('appointment_id').exists().notEmpty(),
    body('comment').exists().notEmpty(),
], appointmentController.comment);

router.post('/archive', [
    body('appointment_id').exists().notEmpty()
], appointmentController.archive);

router.post('/updatestatus', [
    body('appointment_id').exists().notEmpty(),
    body('status_id').exists().notEmpty(),
], appointmentController.updatestatus);

module.exports = router