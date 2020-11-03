require('dotenv').config()
const express = require('express')
const router = require('./network/routes')

const { PORT } = process.env
var app = express()
app.use(express.json()) //declarar que podemos obtener un json
app.use(express.urlencoded({extended : false})) //si queremos obtener objetos complejos

router(app)


app.use('/app', express.static('public')) //aqui ira nuestra app

app.listen(PORT)
console.log('Server in port', PORT)