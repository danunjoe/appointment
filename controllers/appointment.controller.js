const { validationResult } = require('express-validator');
const crypto = require('crypto');

// Import Services 
const appointmentService = require('../services/appointment.service');
const statusService = require('../services/status.service');
const userService = require('../services/user.service');

exports.list = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        // let user = req.user;
        let data = req.query;

        let page = (req.query.offset ? parseInt(req.query.offset.trim()) : 0);
        let limit = (req.query.limit ? parseInt(req.query.limit.trim()) : 3);

        let pageSkip = 0;
        let pageSize = limit;

        if (page <= 1) {

        } else {
            pageSkip = (page - 1) * pageSize;
        }

        // get status
        let resStatus = await statusService.getAll();

        // get appoitment
        let resAppointment = await appointmentService.getAll(pageSkip, pageSize);
        if (resAppointment && resAppointment.rows && resAppointment.rows.length > 0) {

            let list = [];
            let total = resAppointment.count;

            list = resAppointment.rows.map(item => {

                let statusName = "";
                if (resStatus && resStatus.length > 0) {
                    let findStatus = resStatus.find(x => x.id === item.status_id);
                    if (findStatus) {
                        statusName = findStatus.name;
                    }
                }

                return {
                    id: item.uid,
                    name: item.name,
                    status_id: item.status_id,
                    status_name: statusName,
                    created_dt: item.created_dt,
                    created_by_name: item.created_by_name,
                    updated_dt: item.updated_dt,
                    updated_by_name: item.updated_by_name,
                };
            })

            res.status(200).json({
                status: true,
                message: "",
                results: {
                    list: list,
                    total: total
                }
            });
        } else {
            res.status(200).json({
                status: false,
                message: "ไม่พบข้อมูลในระบบ",
                results: {}
            });
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};

exports.retreive = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let uid = req.params.id;

        const resAppointment = await appointmentService.getByUid(uid);
        if (resAppointment) {

            let statusName = "";
            const resStatus = await statusService.getById(resAppointment.status_id);
            if (resStatus) {
                statusName = resStatus.name;
            }

            let userName = "";
            let userEmail = "";
            const resUser = await userService.getById(resAppointment.created_by);
            if (resUser) {
                userName = resUser.name;
                userEmail = resUser.email;
            }

            let comments = [];
            if (resAppointment.appointment_comments && resAppointment.appointment_comments.length > 0) {
                comments = resAppointment.appointment_comments.map(item => {
                    return {
                        comment: item.comment,
                        created_dt: item.created_dt,
                        created_by_name: item.created_by_name,
                        updated_dt: item.updated_dt,
                        updated_by_name: item.updated_by_name,
                    }
                });
            }

            let data = {
                id: resAppointment.uid,
                name: resAppointment.name,
                status_id: resAppointment.status_id,
                status_name: statusName,
                created_dt: resAppointment.created_dt,
                created_by_name: resAppointment.created_by_name,
                created_by_email: userEmail,
                updated_dt: resAppointment.updated_dt,
                updated_by_name: resAppointment.updated_by_name,
                comments: comments,
            }

            res.status(200).json({
                status: true,
                message: "",
                results: {
                    data: data
                }
            });
        } else {
            res.status(200).json({
                status: false,
                message: "ไม่พบข้อมูลในระบบ",
                results: {}
            });
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};

exports.comment = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let user = req.auth;
        let data = req.body;

        let resArchive = await appointmentService.comment(user, data);
        if (resArchive) {
            res.status(200).json({
                status: true,
                message: "",
                results: {}
            });
        } else {
            res.status(200).json({
                status: false,
                message: "บันทึกข้อมูลไม่สำเร็จ",
                results: {}
            });
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};

exports.archive = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let user = req.auth;
        let data = req.body;

        const resAppointment = await appointmentService.getByUid(data.appointment_id);
        if (resAppointment) {

            let resArchive = await appointmentService.archive(user, data);
            if (resArchive) {
                res.status(200).json({
                    status: true,
                    message: "",
                    results: {}
                });
            } else {
                res.status(200).json({
                    status: false,
                    message: "บันทึกข้อมูลไม่สำเร็จ",
                    results: {}
                });
            }

        } else {
            res.status(200).json({
                status: false,
                message: "ไม่พบข้อมูลในระบบ",
                results: {}
            });
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};

exports.updatestatus = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let user = req.auth;
        let data = req.body;

        const resAppointment = await appointmentService.getByUid(data.appointment_id);
        if (resAppointment) {

            let resArchive = await appointmentService.updateStatus(user, data);
            if (resArchive) {
                res.status(200).json({
                    status: true,
                    message: "",
                    results: {}
                });
            } else {
                res.status(200).json({
                    status: false,
                    message: "บันทึกข้อมูลไม่สำเร็จ",
                    results: {}
                });
            }

        } else {
            res.status(200).json({
                status: false,
                message: "ไม่พบข้อมูลในระบบ",
                results: {}
            });
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};