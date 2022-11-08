const express = require('express');

const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
require("dotenv").config();

const PORT = process.env.PORT || 3001
const server = express();
const mysql = require("mysql")
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2589",
    database: "mrmilho"
}
)

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

// function handleRoute(route) {
//     const routePath = require(`./routes/${route}`)

//     return (server.use(`/${route}`, routePath))
// }





let userAccess
let currentUserKEY
let currentUserAccess
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

server.put('/user/:key', (request, response) => {
    const { key } = request.params
    const UserChange = (request.body)
    let SQL = `UPDATE users SET user='${UserChange.user}', password='${UserChange.pass}', access='${UserChange.access}' WHERE idusers = ${key};`
    if (currentUser[0].access == "admin") {
        db.query(SQL, (err, result) => {
        });
    }

    response.statusCode = 200;
    response.json('Upgrade Successfull');
    console.log(request.params)
})


server.delete('/user/:key', (request, response) => {
    const { key } = request.params
    let SQL = `DELETE FROM users WHERE idusers = ${key};`

    if (currentUser[0].access == "admin") {
        db.query(SQL, (err, result) => {

        });
        response.statusCode = 200;
        response.json('Delete Successfull');
    }
})


server.get('/', (request, response) => {

    response.statusCode = 200;
    response.send("Mr.Milho");
});

server.get('/useraccess', (request, response) => {


    response.statusCode = 200;
    console.log(currentUserAccess)
    response.send(currentUserAccess);
});






// server.post('/login', (request, response) => {

//     const logUser = (request.body)
//     let SQL = `SELECT * FROM accounts.users where user="${logUser.user}" && password="${logUser.pass}";`

//     db.query(SQL, (err, result) => {
//         if (result.length <= 0) {
//             response.statusCode = 409;
//             response.json("Wrong combination of username/password")
//             console.log(err)
//         } else if (result.length > 0) {
//             currentUser[0] = result[0]
//             currentUserAccess = result[0].access
//             currentUserKEY = result[0].idusers
//             response.statusCode = 200;
//             response.json(currentUserAccess)
//             console.log(result[0].idusers)
//         }
//     });

// })


// const bcrypt = require('bcrypt');
// server.post('/register', (request, response) => {
//     const newUser = request.body
//     const errMsg = { 1: "User already registered!", 2: "Bad request" }

//     const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
//     const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,25}$/

//     const v1 = USER_REGEX.test(newUser.username)
//     const v2 = PWD_REGEX.test(newUser.password)

//     console.log(request.body)

//     let CHECKREGISTERSQL = `SELECT * FROM mrmilho.accounts where username="${newUser.username}";`

//     if (!v1 || !v2) {
//         response.statusCode = 400;
//         response.send(JSON.stringify(errMsg[2]))
//     }

//     else {

//         db.query(CHECKREGISTERSQL, (err, result) => {
//             if (result.length > 0) {
//                 response.statusCode = 409;
//                 response.send(JSON.stringify(errMsg[1]))
//                 console.log(err)
//             }
//             else if (result.length <= 0) {
//                 const hashedPwd = bcrypt.hash(newUser.password, 10);

//                 let SQL = `INSERT INTO mrmilho.accounts (username, password, idaccess) VALUES ('${newUser.username}', '${hashedPwd}', '${newUser.access}')`;
//                 db.query(SQL, (err, result) => {
//                     console.log(err)
//                     console.log(result)
//                     console.log("Success")
//                 });
//                 response.statusCode = 200;
//                 response.send(JSON.stringify(newUser))
//                 console.log(err)
//             }


//         });
//     }
//     console.log({ username: newUser.username, password: newUser.password, access: newUser.access })
// })




// server.get('/list', (request, response) => {

//     let SQL = `SELECT * FROM mrmilho.accounts;`;

//     db.query(SQL, (err, result) => {
//         if (err) { console.log(err) }
//         else {
//             response.send(result);
//         }
//     });

//     response.statusCode = 200;

// });

server.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Mr.Milho up and running on port ${PORT}`);

})
