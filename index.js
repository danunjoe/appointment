const express = require('express');

const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const jwt = require('./helpers/jwt.js');
const errorHandler = require('./helpers/error-handler.js');

app.use(express.json())

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

// import database
const db = require("./configs/database");

// test connection database
const testDbConnection = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

testDbConnection();

app.get('/', function (req, res) {
    res.send("OK")
})

app.use('/api/appointment', require('./routers/appointment.router'))
app.use('/api/status', require('./routers/status.router'))
app.use('/api/user', require('./routers/user.router'))

const port = process.env.PORT || 3200
const server = app.listen(port, function () {
    console.log("----------------------------------")
    console.log("| Server is running on port " + port + " |")
    console.log("| Let's go                       |")
    console.log("----------------------------------")
})