const express = require("express");
const configMiddleware = require('../Middleware/configMiddleware.js');
const apiRouter = require('./api-router.js');
const server = express();
configMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;