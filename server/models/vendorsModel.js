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
    let sql = "call getAllVendors()"
    db.query(sql, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//Retrieve One Vendor
export const getVendorByName = (vendorName, result) => {
    let sql = "call getVendorByName(?)"
    db.query(sql, [vendorName], (err, results) => {             
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
    let sql = "update vendors join vendor_type on vendors.vendorTypeID = vendor_type.vendorTypeID join country on vendors.countryID = country.countryID join vendor_contact on vendors.vendorContactID = vendor_contact.vendorContactID set vendors.vendorName = ?, vendor_contact.vendorContactName = 'Dan Johnson' where vendors.vendorID = 1"
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