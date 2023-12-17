const express = require('express')
const Router = require('./Routes/router')
const app = express();

app.use('/',Router);

module.exports = app;