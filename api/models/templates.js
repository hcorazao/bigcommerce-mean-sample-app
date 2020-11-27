'use strict';

const mongoose = require('mongoose');
const Templates = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        default: ''
    },
    template: {
        type: String,
        required: true,
        default: ''
    }
}, {
    timestamps: true
});

const TemplatesModel = mongoose.model('Templates', Templates);
module.exports = TemplatesModel;