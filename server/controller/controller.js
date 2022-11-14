var logsdb = require('../model/model');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    const logs = new logsdb({
        make: req.body.make,
        registration: req.body.registration,
        pic: req.body.pic,
        pax: req.body.pax,
        time: req.body.time
    });

    logs.save(logs).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        })
    });
}

exports.find = (req, res) => {

}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}