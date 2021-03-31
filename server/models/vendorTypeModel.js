import db from "../config/database.js"

//Retrieve all Vendor Status
export const getVendorType = (result) => {
    db.query("SELECT * FROM vendor_type", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Vendor Status
export const insertVendorType = (data, result) => {
    db.query("INSERT INTO vendor_type VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Vendor Status
export const updateVendorType = (data, id, result) => {
    db.query("UPDATE vendor_type SET vendorsID = ?, vendorStatusID = ?, vendorTypeName = ? WHERE vendorTypeID = ?", [data.vendorsID, data.vendorStatusID, data.vendorTypeName, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor Status
export const deleteVendorType = (id, result) => {
    db.query("DELETE FROM vendor_type WHERE vendorTypeID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}