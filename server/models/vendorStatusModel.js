import db from "../config/database.js"

//Retrieve all Vendor Status
export const getVendorStatus = (result) => {
    db.query("SELECT * FROM vendor_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Vendor Status
export const insertVendorStatus = (data, result) => {
    db.query("INSERT INTO vendor_status VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Vendor Status
export const updateVendorStatus = (data, id, result) => {
    db.query("UPDATE vendor_status SET vendorsID = ?, statusName = ? WHERE vendorStatusID = ?", [data.vendorsID, data.statusName, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor Status
export const deleteVendorStatus = (id, result) => {
    db.query("DELETE FROM vendor_status WHERE vendorStatusID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}