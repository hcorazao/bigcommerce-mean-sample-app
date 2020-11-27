const nodeMailer = require("nodemailer");
const otpGenerator = require('otp-generator');
const UserModel = require('../models/user');
const TemplateModel = require('../models/templates');
const si = require('systeminformation');
const Handlebars = require("handlebars");

module.exports = {
    sendMail
};

async function sendMail(payload) {
    let { email } = payload;
    let userData = await UserModel.findOne({ email });
    if (userData) {
        let systemName = await si.osInfo();
        let systemIp = await si.users();
        let otp = otpGenerator.generate(6, {
            upperCase: false,
            specialChars: false,
            alphabets: false
        });
        let emailTemplate = await TemplateModel.findOne({ slug: 'EMAIL' });
        let template = Handlebars.compile(emailTemplate.template);
        let context = {
            EMAIL: email,
            LOGO_HEADER: 'http://localhost:4200/assets/images/email-header-logo.svg',
            SYSTEM_NAME: systemName.platform,
            IP_ADDRESS: '54.54.54.54',
            DATE: Date.now(),
            OTP: otp,
            LOGO_FOOTER: 'http://localhost:4200/assets/images/email-footer-logo.svg'
        };

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

        let info = await smtpTransport.sendMail({
            from: 'test.ducktale@gmail.com',
            to: email,
            subject: "Hello Test",
            html: template(context)
        });
        if (info.messageId) {
            var updateValue = { $set: { otp: otp } };
            let upadateData = await UserModel.updateOne({email: email}, updateValue);
            return upadateData;
        }
    }
}