/*
 * @file: index.js
 * @description: It Contain db setup function.
 * @author: Amarjit Singh
*/

const mongoose = require('mongoose');
const env_config = require('../config/env');

const { auth, dbName, host, username, password, port } = env_config.db.mongo;
const databaseUrl = auth ?
    `mongodb://${username}:${password}@${host}:${port}/${dbName}`
    :
    `mongodb://${host}:${port}/${dbName}`;

// Mongose setup with server
mongoose.connect(databaseUrl, {
    'useCreateIndex': true,
    'useNewUrlParser': true,
    'useUnifiedTopology': true,
    'useFindAndModify': false
});

exports.connection = () => {
    mongoose.connection.on('connected', function () {
        console.log('Mongoose connected! ');
    });
}