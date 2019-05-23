const pgp = require('pg-promise');
const dotenv = require('dotenv');

dotenv.config();

const { CONNECTION_STRING } = process.env;

const db = pgp()(CONNECTION_STRING);

module.exports = db;