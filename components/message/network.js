const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

// app.use('/', (req, res) => res.send('Hola'))
router.get('/', (req, res) => {
  
 

  controller.listMessages()
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch((error) => {
      response.error(req, res, 'Información invalida', 404, error)
    })
})

router.post('/', (req, res) => {

  controller.addMessage(req.body)
  .then((data) => {
    response.success(req, res, data, 201)
  })
  .catch((err) => {
    response.error(req, res, 'Información invalida', 404, "Error en la data")
  })


})

module.exports = router