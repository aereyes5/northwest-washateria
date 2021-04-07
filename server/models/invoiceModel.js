const db = require('../config/database')

module.exports = {
//Create Invoice
insertInvoice: (data, result) => {
    db.query("INSERT INTO invoice SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Retrieve all Invoices
getInvoice: (result) => {
    db.query("call getInvoices()", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
},

//Retrieve One Invoice
getInvoiceById: (invoiceID, result) => {
    db.query("SELECT * FROM invoice WHERE invoiceID = ?", [invoiceID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
},

//Update Invoice
updateInvoiceById: (data, invoiceID, result) => {
    db.query("UPDATE invoice SET invoiceDate = ?, employeeID = ?, customerID = ?, productsID = ?, productQuantity = ?, serviceID = ?, totalPrice = ?, invoiceStatusID = ? WHERE invoiceID = ?", [data.invoiceDate, data.employeeID, data.customerID, data.productsID, data.productQuantity, data.serviceID, data.totalPrice, data.invoiceStatusID, invoiceID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// //Delete Invoice
// export const deleteInvoiceById = (invoiceID, result) => {
//     db.query("DELETE FROM invoice WHERE invoiceID = ?", [invoiceID], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }

}