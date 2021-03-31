import db from "../config/database.js"

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

//Create Vendor Contact
export const insertVendorContact = (data, result) => {
    db.query("INSERT INTO vendor_contact VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Vendor Contact
export const updateVendorContact = (data, id, result) => {
    db.query("UPDATE vendor_contact SET vendorsID = ?, vendorContactName = ?, phoneNumber = ?, email = ? WHERE vendorContactID = ?", [data.vendorsID, data.vendorContactName, data.phoneNumber, data.email, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor Contact
export const deleteVendorContact = (id, result) => {
    db.query("DELETE FROM vendor_contact WHERE vendorContactID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}