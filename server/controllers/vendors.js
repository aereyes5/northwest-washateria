const Vendors = require('../models/vendorsModel')

module.exports = {

    //Create New Vendor
    createVendor: (req, res) => {
        const data = req.body;
        Vendors.insertVendor(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Vendors
    showVendors: (req, res) => {
        Vendors.getVendors((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Vendor
    showVendorByName: (req, res) => {
        Vendors.getVendorByName(req.params.vendorName, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    showVendorByID: (req, res) => {
        Vendors.getVendorByID(req.params.vendorID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Vendor
    updateVendor: (req, res) => {
        const data = req.body;
        const vendorID = req.params.vendorID;
        Vendors.updateVendorById(data, vendorID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Delete Vendor
    deleteVendor: (req, res) => {
        const vendorID = req.params.vendorID;
        Vendors.deleteVendorById(vendorID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}