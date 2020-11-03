const mongoose = require('mongoose')

const Schema = mongoose.Schema

//los reglas de los datos que van a entrar a la base
const mySchema = new Schema({
  user: String,
  message: String,
  date: Date,
})

// quiero que el esquema funcione sobre lo que voy a mandar a la base de datos
const model = mongoose.model('data', mySchema)

module.exports = model

