const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2589",
    database: "mrmilho"
}
)

const getPoke = (request, response) => {


    const { key } = request.params
    const drops = []



    let SQL =

        `SELECT  i.ItemName, i.ValueNpc, i.ValueMarket , i.url
    FROM pokemons as p 
    join droplist as d on p.id = d.idpokemon
     join items as i on d.iditem = i.id 
     where p.Name = "${key}" `


    db.query(SQL, (err, result) => {
        drops.push(result)
        response.statusCode = 200;
        response.json(drops);

    });


}

const path = require('path')
module.exports = { getPoke }

