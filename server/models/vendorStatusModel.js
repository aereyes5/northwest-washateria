const db = require('../config/database')

module.exports = {

//Retrieve all Vendor Status
getVendorStatus: (result) => {
    db.query("SELECT * FROM vendor_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Create Vendor Status
insertVendorStatus: (data, result) => {
    db.query("INSERT INTO vendor_status VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Update Vendor Status
updateVendorStatus: (data, vendorStatusID, result) => {
    db.query("UPDATE vendor_status SET statusName = ? WHERE vendorStatusID = ?", [data.statusName, vendorStatusID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Delete Vendor Status
deleteVendorStatus: (vendorStatusID, result) => {
    db.query("DELETE FROM vendor_status WHERE vendorStatusID = ?", [vendorStatusID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
}