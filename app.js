require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const port = process.env.SERVER_PORT;
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// App Routes ============================================
const auth = require("./api/routes/auth");
const load = require("./api/routes/load");
const uninstall = require("./api/routes/uninstall");

const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// App Routes ============================================+
app.use("/auth", auth);
app.use("/load", load);
app.use("/uninstall", uninstall);
app.use('/api', routes(express));

app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        res.status(400).json(failAction(err.error.message.toString().replace(/[\""]+/g, "")));
    } else {
        // pass on to another error handler
        next(err);
    }
});

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`);
});