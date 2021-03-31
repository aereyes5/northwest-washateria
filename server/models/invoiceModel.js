import db from "../config/database.js"

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

//Retrieve One Invoice
export const getInvoiceById = (invoiceID, result) => {
    db.query("SELECT * FROM invoice WHERE invoiceID = ?", [invoiceID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//Update Invoice
export const updateInvoiceById = (data, id, result) => {
    db.query("UPDATE invoice SET customerID = ?, productsID = ?, servicesID = ?, invoiceDate = ?, productName = ?, productPrice = ?, productQuantity = ?, totalPrice = ? WHERE invoiceID = ?", [data.customerID, data.productsID, data.servicesID, data.invoiceDate, data.productName, data.productPrice, data.productQuantity, data.totalPrice, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// //Delete Invoice
// export const deleteInvoiceById = (id, result) => {
//     db.query("DELETE FROM invoice WHERE invoiceID = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }
