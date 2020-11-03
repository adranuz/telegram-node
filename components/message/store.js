
// crear un muck que es falsificar la base de datos
const db = require('mongoose')
const Model = require('./model')
const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME} = process.env


db.Promise = global.Promise
// db.connect('mongodb+srv://db_user:YjigYZawJCD2na3P@cluster0.ylbkd.mongodb.net/db_chat?retryWrites=true&w=majority', {
db.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 1,
}).then(db => console.log('db conectada')).catch(err => console.error(err))




function addMessage(message) {
  const myMessage = new Model(message)
  console.log(myMessage) //aqui me di cuenta que no estaba manejando la data obtenida
  myMessage.save()
}

async function listMessages() { 
  const messages = await Model.find() 
  return messages
}
module.exports = {
  add: addMessage,
  list: listMessages,
  // get: getMessage,
  // update: updateMessage,
  // delete: deleteMessage,
  // etc 
}