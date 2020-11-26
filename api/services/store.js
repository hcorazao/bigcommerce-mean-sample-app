const StoreModel = require('../models/store');
const Message = require('../utils/messages');

module.exports = {
    saveStore
};

async function saveStore(payload) {
    let { _id, storeName } = payload;
    storeName = storeName.toLowerCase();

    // CHECK EMAIL EXISTS OR NOT
    if (await StoreModel.findOne({ storeName, userId: _id })) throw new Error(Message.storeAlreadyExists);

    const storeData = await StoreModel.insertMany({
        storeName,
        userId: _id
    });

    return storeData;
};