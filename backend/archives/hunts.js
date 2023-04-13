const database = require('../database/db')

const getHunts = (request, response) => {
    let SQL = `SELECT pokemons.url FROM pokemons`
    database.db.query(SQL, (err, result) => {
        response.statusCode = 200;
        response.json(result);

    })
}


const getImg = (request, response) => {
    const { key } = request.params
    let SQL = ` pokemons.url FROM pokemons WHERE pokemons.Name = ${key}`
    database.db.query(SQL, (err, result) => {
        response.statusCode = 200;
        response.json(result);

    })
}
const getPoke = (request, response) => {


    const { key } = request.params
    const drops = []



    let SQL =

        `SELECT  i.ItemName, i.ValueNpc, i.ValueMarket , i.url
    FROM mrmilho.pokemons as p 
    join mrmilho.droplist as d on p.id = d.idpokemon
     join mrmilho.items as i on d.iditem = i.id 
     where p.Name = "${key}" `


    database.db.query(SQL, (err, result) => {
        console.log(result)
        console.log(SQL)
        drops.push(result)
        response.statusCode = 200;
        response.json(drops);

    });


}

const path = require('path')
module.exports = { getPoke, getHunts, getImg }

