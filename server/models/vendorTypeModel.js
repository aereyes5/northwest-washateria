const db = require('../config/database')

module.exports = {

    //Retrieve all Vendor Status
    getVendorType: (result) => {
        db.query("SELECT * FROM vendor_type", (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Create Vendor Status
    insertVendorType: (data, result) => {
        db.query("INSERT INTO vendor_type VALUES ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Update Vendor Status
    updateVendorType: (data, vendorTypeID, result) => {
        db.query("UPDATE vendor_type SET vendorTypeName = ? WHERE vendorTypeID = ?", [data.vendorTypeName, vendorTypeID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Delete Vendor Status
    deleteVendorType: (vendorTypeID, result) => {
        db.query("DELETE FROM vendor_type WHERE vendorTypeID = ?", [vendorTypeID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
}