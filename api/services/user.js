const UserModel = require('../models/user');
const Message = require('../utils/messages');

const { encryptpassword, generateRandom } = require('../utils/universal');

module.exports = {
    saveUser
};

async function saveUser(payload) {
    let { firstName, lastName, email, password, businessSize } = payload;
    email = email.toLowerCase();
    password = encryptpassword(password);

    // CHECK EMAIL EXISTS OR NOT
    if (await UserModel.findOne({ email })) throw new Error(Message.emailAlreadyExists);

    const userData = await UserModel.insertMany({
        firstName,
        lastName,
        email,
        password
    });

    return userData;
};