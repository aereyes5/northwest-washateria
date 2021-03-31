import db from "../config/database.js"

//Retrieve all Vendors
export const getVendor = (result) => {
    db.query("SELECT * FROM vendors", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Vendor
export const insertVendor = (data, result) => {
    db.query("INSERT INTO vendors VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Vendor
export const updateVendor = (data, id, result) => {
    db.query("UPDATE vendors SET Vendor_Name = ?, Products_ID = ? WHERE Vendors_ID = ?", [data.Vendor_Name, data.Products_ID, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor
export const deleteVendor = (id, result) => {
    db.query("DELETE FROM vendors WHERE Vendors_ID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}