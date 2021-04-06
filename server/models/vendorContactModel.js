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
export const getVendorContactById = (vendorContactID, result) => {
    db.query("SELECT * FROM vendor_contact WHERE vendorContactID = ?", [vendorContactID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Vendor Contact
export const updateVendorContactById = (data, vendorContactID, result) => {
    db.query("UPDATE vendor_contact SET vendorContactName = ?, phoneNumber = ?, email = ? WHERE vendorContactID = ?", [data.vendorContactName, data.phoneNumber, data.email, vendorContactID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Vendor Contact
export const deleteVendorContactById = (vendorContactID, result) => {
    db.query("DELETE FROM vendor_contact WHERE vendorContactID = ?", [vendorContactID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}