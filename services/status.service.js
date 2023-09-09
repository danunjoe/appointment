const db = require("../configs/database");

const initModels = require("../models/init-models");
var models = initModels(db);

async function getAll() {
    return await models.status.findAll({});
}

async function getById(id) {
    return await models.status.findOne({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAll,
    getById
}
