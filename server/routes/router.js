const express = require("express");

const route = express.Router(); //fix later
const services = require("../services/render");
const controller = require("../controller/controller");

route.get('/home', services.home)
route.get('/stats', services.stats)
route.get('/settings', services.settings)

route.post('/api/files', controller.create)
route.get('/api/files', controller.find)
route.put('/api/files/:id', controller.edit)
route.delete('/api/files/:id', controller.delete)

module.exports = route