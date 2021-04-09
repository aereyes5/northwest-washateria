const db = require('../config/database')

module.exports = {

    //Create Vendor
    insertVendor: (data, result) => {
        db.query("call insertVendor(?,?,?,?,?,?)", [data.vendorName, data.vendorType, data.countryName, data.vendorContactName, data.phoneNumber, data.email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Retrieve all Vendors
    getVendors: (result) => {
        let sql = "call getAllVendors()"
        db.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    },

    //Retrieve One Vendor
    getVendorByName: (vendorName, result) => {
        let sql = "call getVendorByName(?)"
        db.query(sql, [vendorName], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    },

    getVendorByID: (vendorID, result) => {
        let sql = "call getVendorByID(?)"
        db.query(sql, [vendorID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    },

    //Update Vendor
    updateVendorById: (data, result) => {
        db.query("call updateVendor(?,?,?,?,?,?,?)", [data.vendorID, data.vendorName, data.type, data.country, data.vendorContact, data.phoneNumber, data.email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Delete Vendor
    deleteVendorById: (vendorID, result) => {
        db.query("call deleteVendor(?)", [vendorID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
}