// const { Op } = require("sequelize");

// import database
const { where } = require("sequelize");
const db = require("../configs/database");

const initModels = require("../models/init-models");

var models = initModels(db);

async function getAll(pageSkip, pageSize) {
    let res = await models.appointment
        .findAndCountAll({
            include: [
                {
                    model: models.status,
                    require: true,
                    as: 'status',
                }
            ],
            where: {
                is_archived: false,
                is_active: true
            },
            order: [
                ['created_dt', 'ASC']
            ],
            offset: pageSkip,
            limit: pageSize,
        });


    return res;
}

async function getByUid(uid) {
    let res = await models.appointment
        .findOne({
            include: [
                {
                    model: models.appointment_comment,
                    as: 'appointment_comments',
                    required: true,
                    separate: true,
                    order: [
                        ['updated_dt', 'desc']
                    ]
                }
            ],
            where: {
                uid: uid
            },
        })


    // let test = res.toJSON();

    return res;
}

async function archive(user, data) {
    const transaction = await db.transaction();
    try {
        let result = await models.appointment.update({
            is_archived: true,
            updated_dt: new Date(),
            updated_by: user.id,
            updated_by_name: user.name,
        }, {
            where: {
                uid: data.appointment_id,
            },
            transaction
        })

        if (!result) {
            return false
        }

        await transaction.commit();

        return true
    } catch (err) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error(err.message);
    }
}

async function comment(user, data) {

    const transaction = await db.transaction();
    try {
        let resAppointment = await models.appointment.findOne({
            where: {
                uid: data.appointment_id
            }
        });

        if (!resAppointment) {
            return false
        }

        let result = await models.appointment_comment.create({
            appointment_id: resAppointment.id,
            comment: data.comment,
            is_active: true,
            is_delete: false,
            created_dt: new Date(),
            created_by: user.id,
            created_by_name: user.name,
            updated_dt: new Date(),
            updated_by: user.id,
            updated_by_name: user.name,
        }, {
            transaction
        });

        if (!result) {
            return false;
        }

        await transaction.commit();

        return true;
    } catch (err) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error(err.message);
    }
}

async function updateStatus(user, data) {
    const transaction = await db.transaction();
    try {
        let result = await models.appointment.update({
            status_id: data.status_id,
            updated_dt: new Date(),
            updated_by: user.id,
            updated_by_name: user.name,
        }, {
            where: {
                uid: data.appointment_id,
            },
            transaction
        })

        if (!result) {
            return false
        }

        await transaction.commit();

        return true
    } catch (err) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error(err.message);
    }
}


module.exports = {
    getAll,
    getByUid,
    archive,
    comment,
    updateStatus
}
