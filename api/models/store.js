'use strict';

const mongoose = require('mongoose');
const Stores = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
        default: ''
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
}, {
    timestamps: true
});

const StoresModel = mongoose.model('Stores', Stores);
module.exports = StoresModel;