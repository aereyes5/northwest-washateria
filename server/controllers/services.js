const Services = require('../models/servicesModel')

module.exports = {

    //Create New Service
    createService: (req, res) => {
        const data = req.body;
        Services.insertService(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Services
    showServices: (req, res) => {
        Services.getServices((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Service
    showServiceById: (req, res) => {
        Services.getServiceById(req.params.serviceID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Service
    updateService: (req, res) => {
        const data = req.body;
        const serviceID = req.params.serviceID;
        Services.updateServiceById(data, serviceID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Delete Service
    deleteService: (req, res) => {
        const serviceID = req.params.serviceID;
        Services.deleteServiceById(serviceID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}