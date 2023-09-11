const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const jwt = require('./helpers/jwt.js');
const errorHandler = require('./helpers/error-handler.js');

app.use(cors())
app.use(express.json())

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

// import database
const db = require("./configs/database");

app.get('/api/health', async function (req, res) {
    try {
        await db.authenticate();
        // console.log("Connection has been established successfully.");
        res.status(200).send("Ok");
    } catch (error) {
        // console.error("Unable to connect to the database:", error);
        res.status(500).send("Fail");
    }
})
app.use('/api/appointment', require('./routers/appointment.router'))
app.use('/api/status', require('./routers/status.router'))
app.use('/api/user', require('./routers/user.router'))

const port = process.env.PORT || 3200

if (process.env.NODE_ENV !== "test") {
    const server = app.listen(port, function () {
        console.log("----------------------------------")
        console.log("| Server is running on port " + port + " |")
        console.log("| Let's go                       |")
        console.log("----------------------------------")
    });
}

module.exports = app;