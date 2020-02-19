const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');

const sessionConfig = {
    name: 'notaname',
    secret: 'keep it a secret, keep it safe!',
    cookie: {
        maxAge: 1000 * 30,
        secure: false, // True in production HTTPS
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true, //GDPR Laws
};



module.exports = server => {
    server.use(helmet());
    server.use(cors());
    server.use(express.json());
    server.use(session(sessionConfig));
};