import db from "../config/database.js"

//Create Vendor Contact
export const insertVendorContact = (data, result) => {
    db.query("INSERT INTO vendor_contact SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve all Vendor Contact Info
export const getVendorContact = (result) => {
    db.query("SELECT * FROM vendor_contact", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve One Vendor
export const getVendorById = (vendorID, result) => {
    db.query("SELECT * FROM customers WHERE vendorID = ?", [vendorID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//Update Vendor Contact
export const updateVendorContactById = (data, id, result) => {
    db.query("UPDATE vendor_contact SET vendorContactName = ?, phoneNumber = ?, email = ? WHERE vendorID = ?", [data.vendorContactName, data.phoneNumber, data.email, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor Contact
export const deleteVendorContactById = (id, result) => {
    db.query("DELETE FROM vendor_contact WHERE vendorContactID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}