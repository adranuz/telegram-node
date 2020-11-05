const { Model } = require('mongoose')
const store = require('./store')

function listMessages(data) { return new Promise((resolve, reject) => {
  resolve(store.list(data))
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

function updateMessage(id, message) { return new Promise( async (resolve, reject) => {
  console.log(id, message)
  if (!id || !message){
    reject('Invalid data')
    return false
  }
  // const result = await store.edit(id, message)
  resolve(result)
})}

function deleteMessage(id) { return new Promise( async(resolve, reject) => {
  if (!id) {
    reject('id Invalido')
    return false
  }
  store.delete(id)
  .then(() => resolve())
  .catch((err) => reject(err))
})}


module.exports = {
  addMessage,
  listMessages,
  updateMessage,
  deleteMessage,
}