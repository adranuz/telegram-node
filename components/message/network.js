const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

// app.use('/', (req, res) => res.send('Hola'))
router.get('/', (req, res) => {
  // data
  const data = req.query.user || null
  //controller
  controller.listMessages(data)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch((error) => {
      response.error(req, res, 'Información invalida', 404, error)
    })
})

router.post('/', (req, res) => {
  // data
  const data = req.body
  //controller
  controller.addMessage(data)
  .then((data) => {
    response.success(req, res, data, 201)
  })
  .catch((err) => {
    response.error(req, res, 'Información invalida', 404, err)
  })
})

router.patch('/:id',(req, res) => {
  //data
  const data = {
    id: req.params.id,
    message: req.body.message,
  }
  //controller
  controller.updateMessage(data)
  .then((data) => {
    response.success(req, res, data, 200)
  })
  .catch((err) => {
    response.error(req, res, 'Información invalida', 404, err)
  })
  // res.send('ok') //no se pueden enviar dos cosas a la vez
})



module.exports = router