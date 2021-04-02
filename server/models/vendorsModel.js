import db from "../config/database.js"

//Create Vendor
export const insertVendor = (data, result) => {
    db.query("INSERT INTO vendors SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve all Vendors
export const getVendors = (result) => {
    db.query("SELECT * FROM vendors", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve One Vendor
export const getVendorByName = (vendorName, result) => {
    db.query("SELECT * FROM vendors WHERE vendorName LIKE '%?%'", [vendorName], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//Update Vendor
export const updateVendorById = (data, vendorID, result) => {
    db.query("UPDATE vendors SET vendorName = ?, vendorContactID = ?, vendorTypeID = ?, countryID = ? WHERE vendorID = ?", [data.vendorName, data.vendorContactID, data.vendorTypeID, data.countryID, vendorID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor
export const deleteVendorById = (vendorID, result) => {
    db.query("DELETE FROM vendors WHERE vendorID = ?", [vendorID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}