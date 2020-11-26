/*
 * @file: universal.js
 * @description: It Contain function layer for all commom function.
 * @author: Amarjit Singh
 */
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const env_config = require('./../config/env');
const { jwtAlgo, jwtKey } = env_config.app;

// password encryption.
exports.encryptpassword = (password) => {
    return md5(password);
};

// Generate random strings.
exports.generateRandom = (length = 32, alphanumeric = true) => {
    let data = '',
        keys = '';

    if (alphanumeric) {
        keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    } else {
        keys = '0123456789';
    }

    for (let i = 0; i < length; i++) {
        data += keys.charAt(Math.floor(Math.random() * keys.length));
    }

    return data;
};

/*********** Generate JWT token *************/
exports.generateToken = data =>
    jwt.sign(data, jwtKey, { algorithm: jwtAlgo, expiresIn: '90d' });

/*********** Decode JWT token *************/
exports.decodeToken = token => jwt.verify(token, jwtKey);

exports.headersFn = async (req, res, next) => {
    req.deviceType = req.headers['DeviceType'] || req.headers['deviceType'] || req.headers['devicetype'];
    console.log("DEVICETYPE:----111--> ", req.deviceType);
    next();
};