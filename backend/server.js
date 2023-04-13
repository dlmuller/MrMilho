const express = require('express');
require('./database/db');
const path = require('path');
const fs = require('fs');

const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

require("dotenv").config();

const PORT = process.env.PORT || 3001
const server = express();
const mysql = require("mysql");
const { create } = require('domain');



server.use(logger);

const whitelist = ['http://localhost:3000/', 'http://localhost:3001/', 'https://www.google.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
server.use(cors(corsOptions))

server.use(
    express.urlencoded({
        extended: true,
    })
);


const currentUser = {}

server.use(express.json());

function handleRoute(routes) {
    routes.forEach(function (route) {
        const routePath = require(`./routes/${route}`)

        return (server.use(`/${route}`, routePath))
    });
}
const routes = ['register', 'auth', 'hunts']





handleRoute(routes)


server.get('/', (request, response) => {

    response.statusCode = 200;
    response.send("Mr.Milho");
});

server.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Mr.Milho up and running on port ${PORT}`);

})
