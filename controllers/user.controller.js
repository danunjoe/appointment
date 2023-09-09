const { validationResult } = require('express-validator');

// Import Services 
const userService = require('../services/user.service');

exports.list = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let results = await userService.getAll();
        if (results) {

            let list = results.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                };
            })

            res.status(200).json({
                status: true,
                message: "",
                results: {
                    list: list
                }
            });
        } else {
            res.status(500).json({});
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};

exports.create = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let user = req.user;
        let data = req.body;

        let results = await userService.create(user, data);
        if (results) {

            let data =  {
                name: results.name,
                email: results.email,
            }

            res.status(200).json({
                status: true,
                message: "",
                results: {
                    data: data
                }
            });
        } else {
            res.status(500).json({});
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};

exports.authen = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let data = req.body;

        let results = await userService.authen(data);
        if (results) {

            let data = {
                token : results
            }

            res.status(200).json({
                status: true,
                message: "",
                results: {
                    data: data
                }
            });
        } else {
            res.status(500).json({});
        }
    } catch (err) {
        res.status(500).json({
            errors: err.message
        });
    }
};