const db = require("../configs/database");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../configs/config.json');
const _bcryptjs = require('../utilities/bcryptjs');

const initModels = require("../models/init-models");
var models = initModels(db);

async function getAll() {
    return await models.user.findAll({});
}

async function getById(id) {
    return await models.user.findOne({
        where: {
            id: id
        }
    });
}

async function create(user, data) {
    const transaction = await db.transaction();
    try {
        const results = await models.user.create({
            name: data.name,
            email: data.email,
            pwd: _bcryptjs.encode(data.password)
        }, {
            transaction
        });

        await transaction.commit();

        return results
    } catch (err) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error(err.message);
    }
}

async function authen(data) {
    const results = await models.user.findOne({
        where: {
            email: data.email
        }
    });

    if (results) {
        if (bcryptjs.compareSync(data.password, results.pwd)) {

            let user = results.toJSON();

            let token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email,
            }, config.secret_key, {
                algorithm: 'HS256',
                expiresIn: config.tokey_expiration
            })

            return token
        }
    }

    return null;
}

module.exports = {
    getAll,
    create,
    authen,
    getById,
}
