const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

dotenv.config();

module.exports = app;