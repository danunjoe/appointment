const { validationResult } = require('express-validator');

// Import Services 
const statusService = require('../services/status.service');

exports.list = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        let results = await statusService.getAll();
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
        res.status(500).json({ errors: err.message });
    }
};