const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

require('./config/db');

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', require('./routes/index')(express));

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`);
});