import db from "../config/database.js"

//Retrieve all Invoices
export const getInvoice = (result) => {
    db.query("SELECT * FROM invoice", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Invoice
export const insertInvoice = (data, result) => {
    db.query("INSERT INTO invoice VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Invoice
export const updateInvoice = (data, id, result) => {
    db.query("UPDATE invoice SET customerID = ?, productsID = ?, servicesID = ?, invoiceDate = ?, productName = ?, productPrice = ?, productQuantity = ?, totalPrice = ? WHERE invoiceID = ?", [data.customerID, data.productsID, data.servicesID, data.invoiceDate, data.productName, data.productPrice, data.productQuantity, data.totalPrice, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Invoice
export const deleteInvoice = (id, result) => {
    db.query("DELETE FROM invoice WHERE invoiceID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}