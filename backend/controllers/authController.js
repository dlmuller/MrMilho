const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2589",
    database: "mrmilho"
}
)

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises
const path = require('path')


const handleLogin = async (request, response) => {

    const logUser = (request.body)

    if (!logUser.username || !logUser.password) {
        response.statusCode = 400;
        response.json({ 'message': "username and password required" })
    } else {
        //let SQL = `SELECT * FROM mrmilho.accounts where username="${logUser.username}" join access;`
        let SQL = `SELECT accounts.id , accounts.username ,accounts.password, access.access FROM accounts join access on accounts.idaccess=access.idaccess where username="${logUser.username}"`
        db.query(SQL, async (err, result) => {

            if (result.length <= 0) {

                response.statusCode = 409;
                response.json("User not registered")
                console.log(err)
            }


            if (result.length > 0) {
                console.log(result[0])
                const foundUserPassword = result[0].password
                const foundUserAccess = result[0].access
                const match = await bcrypt.compare(logUser.password, foundUserPassword)
                if (match) {
                    const accessToken = jwt.sign(
                        {
                            "UserInfo": {
                                "username": logUser.username,
                                "roles": foundUserAccess
                            }
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '30s' }
                    )
                    const refreshToken = jwt.sign(
                        { "username": logUser.username },
                        process.env.REFRESH_TOKEN_SECRET,
                        { expiresIn: '1d' }
                    )

                    let tokenSQL = `UPDATE mrmilho.accounts SET token=${refreshToken} WHERE username = ${logUser.username};`
                    db.query(tokenSQL, (err, result) => {
                    });

                    response.statusCode = 200
                    response.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
                    response.json({ foundUserAccess, accessToken });

                    return;
                }
                response.statusCode = 401;
                response.json('Wrong Password')
                console.log('missing pwd');
            }
        })
    }
}
const teste = (request, response) => {
    response.send('hello World!')
}

module.exports = { handleLogin, teste }