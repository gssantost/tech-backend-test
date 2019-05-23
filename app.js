const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes');

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.use('/api/v1', routes);

module.exports = app;