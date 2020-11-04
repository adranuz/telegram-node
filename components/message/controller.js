const store = require('./store')

function listMessages(user) { return new Promise((resolve, reject) => {
  // console.log(user)
  resolve(store.list(user))
})}

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

function updateMessage({id, message}) { return new Promise( async (resolve, reject) => {
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