const mysql = require("mysql");
const fs = require('fs');
const path = require('path')

const { create } = require('domain');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "mrmilho",
}
)
const dbstart = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
    multipleStatements: true
}
)
const createDatabase = fs.readFileSync(path.join(__dirname, '/start.sql')).toString();
dbstart.query("SELECT * FROM mrmilho.pokemons", (err, result) => {
    if (result != undefined) {
        return
    } else {
        dbstart.query(createDatabase, (err, result) => {
            console.log(result)
            console.log(err);
        });
    }
});


module.exports = { db }