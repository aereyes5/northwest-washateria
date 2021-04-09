const VendorContact = require('../models/vendorContactModel')

module.exports = {

    //Create New Customer
    createCustomer: (req, res) => {
        const data = req.body;
        VendorContact.insertVendorContact(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Vendors
    showVendorContact: (req, res) => {
        VendorContact.getVendorContact((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Vendor
    showVendorContactByID: (req, res) => {
        VendorContact.getVendorContactById(req.params.vendorContactID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Vendor
    updateVendorContact: (req, res) => {
        const data = req.body;
        const vendorContactID = req.params.vendorContactID;
        VendorContact.updateVendorContactById(data, vendorContactID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Delete Customer
    deleteCustomer: (req, res) => {
        const customerID = req.params.customerID;
        VendorContact.deleteCustomerById(customerID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}