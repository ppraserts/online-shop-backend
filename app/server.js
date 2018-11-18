const express = require('express')
const mysql = require('mysql')
const app = express()

var result = {}
var connection = mysql.createConnection({
    host     : 'online-shop-mysql',
    user     : 'online-shop',
    password : 'root',
    database : 'online-shop'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    result = { test: rows[0].solution }
    console.log('The solution is: ', rows[0].solution)
})

connection.end()

const books = [
    {
        "id": "1",
        "name": "Game of thrones"
    },
    {
        "id": "2",
        "name": "Clash of kings"
    }
]
app.get('/', (req, res) => res.json(result))

app.listen(3000, () => console.log('Example app listening on port 3000!'))