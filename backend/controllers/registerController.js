const database = require('../database/db')

const bcrypt = require('bcrypt');

const handleNewUser = async (request, response) => {
    const newUser = request.body
    const errMsg = { 1: "User already registered!", 2: "Bad request" }

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,25}$/

    const v1 = USER_REGEX.test(newUser.username)
    const v2 = PWD_REGEX.test(newUser.password)

    const hashedPwd = await bcrypt.hash(newUser.password, 10);

    let CHECKREGISTERSQL = `SELECT * FROM mrmilho.accounts where username="${newUser.username}";`

    console.log({ new: newUser })
    if (!v1 || !v2) {
        response.statusCode = 400;
        response.send(JSON.stringify(errMsg[2]))
    }

    else {

        database.db.query(CHECKREGISTERSQL, (err, result) => {
            if (result.length > 0) {
                response.statusCode = 409;
                response.send(JSON.stringify(errMsg[1]))
                console.log(err)
            }
            else if (result.length <= 0) {

                let SQL = `INSERT INTO mrmilho.accounts (username, password, idaccess) VALUES ('${newUser.username}', '${hashedPwd}', '${newUser.access}')`;
                database.db.query(SQL, (err, result) => {
                    console.log(err)
                    console.log(result)
                    console.log("Success")
                });
                response.statusCode = 200;
                response.send(JSON.stringify(newUser))
                console.log(err)
            }


        });
    }
    console.log({ username: newUser.username, password: newUser.password, access: newUser.access })
}

module.exports = { handleNewUser }