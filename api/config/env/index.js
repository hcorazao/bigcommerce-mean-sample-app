const path = require('path');
require('dotenv').config({ path: './.env' });

const env = process.env.NODE_ENV || 'local';
const config = require(`./${env}`); //eslint-disable-line
const defaults = {
  root: path.join(__dirname, '/..'),
};

module.exports = Object.assign(defaults, config);