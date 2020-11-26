const nodeMailer = require("nodemailer");
const otpGenerator = require('otp-generator');
const UserModel = require('../models/user');

module.exports = {
    sendMail
};

async function sendMail(payload) {
    let { email } = payload;
    // if (await UserModel.findOne({ email })) {

    // }

    let smtpTransport = nodeMailer.createTransport({
        service: 'GMAIL',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'test.ducktale@gmail.com',
            pass: 'Duck@123',
        }
    });
    let otp = otpGenerator.generate(6, {
        upperCase: false,
        specialChars: false,
        alphabets: false
    });

    let info = await smtpTransport.sendMail({
        from: 'test.ducktale@gmail.com',
        to: email,
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b><br><h5>"+otp+"</h5>",
    });
    return info;
}