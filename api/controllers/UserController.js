'use strict';

const status = require('../utils/status');
const { successAction, failAction } = require('../utils/response');
const Message = require('../utils/messages');
const { saveUser } = require('../services/user');
const { saveStore } = require('../services/store');
const { sendMail } = require("../utils/mail");


module.exports = {
    signup,
    login
};

/**************** User signup/register ***********/
async function signup(req, res) {
    const payload = req.body;
    try {
        const user = await saveUser(payload);
        const store = await saveStore({ _id: user[0]._id, storeName: payload.storeName });
        res.status(200).json(successAction(user, Message.registerSuccess));
    } catch (error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
};

/**************** User signup/register ***********/
async function login(req, res) {
    const payload = req.body;
    try {
        const mail = await sendMail(payload);
        res.status(200).json(successAction(mail, Message.mailSentSuccessfull));
    } catch (error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
};