require('dotenv').config()

const dbname = process.env.DB_DATABASE
const dbhost = process.env.DB_HOST
const dbport = process.env.DB_PORT
const username = process.env.DB_USER
const password = process.env.DB_PASS

// reference
// https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html
// https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init

// กำหนด Connection string สำหรับ Sequelize
const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbname, username, password, {
  host: dbhost,
  port: dbport,
  dialect: 'postgres',
  timezone: "+07:00",
})

module.exports = sequelize