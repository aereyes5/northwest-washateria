import db from "../config/database.js"

//Retrieve all Invoice Status
export const getInvoiceStatus = (result) => {
    db.query("SELECT * FROM invoice_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Invoice Status
export const insertInvoiceStatus = (data, result) => {
    db.query("INSERT INTO invoice_status VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Invoice Status
export const updateInvoiceStatus = (data, id, result) => {
    db.query("UPDATE invoice_status SET invoiceID = ?, paymentDescription = ?, invoiceStatus = ? WHERE invoiceStatusID = ?", [data.invoiceID, data.paymentDescription, data.invoiceStatus, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Invoice Status
export const deleteInvoiceStatus = (id, result) => {
    db.query("DELETE FROM invoice_status WHERE invoiceStatusID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}