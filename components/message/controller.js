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

function updateMessage(id, message) { return new Promise( async (resolve, reject) => {
  // console.log(id, message)
  if (!id || !message){
    reject('Invalid data')
    return false
  }
  const result = await store.edit(id, message)
  resolve(result)
})}


module.exports = {
  addMessage,
  listMessages,
  updateMessage,
}