'use strict';

module.exports = function (express) {
    const router = express.Router();
    const user = require('./user')

    router.use('/auth', user);
    return router;
}