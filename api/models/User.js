'use strict';

const mongoose = require('mongoose');
const validator = require('validator');

const Users = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String, 
        trim: true, 
        required: true, 
        unique: true, 
        validator: {
            validator: validator.isEmail,
            message: `{value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    businessSize: {
        type: String,
        require: true,
        default: ''
    },
    otp: {
        type: Number,
        default: ''
    }
}, {
    timestamps: true
});

const UsersModel = mongoose.model('Users', Users);
module.exports = UsersModel;