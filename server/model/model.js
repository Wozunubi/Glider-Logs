const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    make: {type: String, required: true},
    registration: {type: String, required: true, unique: true},
    pic: {type: String, required: true},
    pax: {type: String, required: false},
    time: {type: String, required: true}
});

const logsdb = mongoose.model('logsdata', schema);

module.exports = logsdb;