const express = require("express");
const services = require("../services/render");

const route = express.Router();

route.get('/home', services.home);
route.get('/logs', services.logs)
route.get('/settings', services.settings);

module.exports = route