const express = require('express');
const helmet = require('helmet');
const logger = require('logger');

const dishesRouter = require('../dishes/dishesRouter.js');

const server = express();

server.use(helmet()), express.json(), logger;
server.use(express.json());

server.use('/api/dishes', dishesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hey...remember me?' });
});

module.exports = server;