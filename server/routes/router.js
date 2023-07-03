const express = require('express')
const route = express.Router()
const render = require('../services/render')
const controller = require('../controller/controller')

route.get('/', render.homeRoute);

route.get('/add-user', render.addUser);

route.get('/update-user', render.updateUser)

// Api's requests
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)


module.exports = route
