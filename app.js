require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const SwaggerJsDocs = require('./swagger-config');
const routes = require('./api/routes');
const port = process.env.SERVER_PORT;
const { connection } = require('./api/db');
const { failAction } = require("./api/utils/response")

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*********** Swagger UI setup ********************/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerJsDocs));

/*********** All Routes ********************/
app.use('/api/v1/', routes(express));


/*
    After your routes add a standard express error handler. This will be passed the Joi error, plus an extra "type" field so we can tell what type of validation failed
*/

app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        res.status(400).json(failAction(err.error.message.toString().replace(/[\""]+/g, "")));
    } else {
        // pass on to another error handler
        next(err);
    }
});

// DB CONNECTION
connection();

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`);
});