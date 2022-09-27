const mongoose = require('mongoose');

var structure = new mongoose.Schema({
    type: {type: String, required: true},
    registration: {type: String, required: true, unique},
    pic: {type: String, required: true},
    pax: {type: String, required: false},
    time: {type: String, required: true}
})

const logs = mongoose.model('logs', schema);

module.exports = logs;