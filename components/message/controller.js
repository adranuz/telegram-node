const store = require('./store')

function addMessage({ user, message }){ return new Promise((resolve, reject) => {
    if (!user | !message) {
      console.error('[messageController] No hay usuario o mensaje')
      reject('Los datos son incorrectos')
      return false
    }

    messageData = {
      user,
      message,
      date: new Date(),
    }
    store.add(messageData)
    resolve(messageData)

})}

function listMessages() { return new Promise((resolve, reject) => {
  resolve(store.list())
})}


module.exports = {
  addMessage,
  listMessages,
}