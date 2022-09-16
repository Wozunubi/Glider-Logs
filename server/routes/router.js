const express = require("express");
const services = require("../services/render");

const route = express.Router();

route.get('/', services.home);
route.get('/hi', services.hi);

module.exports = route