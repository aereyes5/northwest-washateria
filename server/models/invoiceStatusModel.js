const db = require('../config/database')

module.exports = {

    //Retrieve all Invoice Status
    getInvoiceStatus: (result) => {
        db.query("SELECT * FROM invoice_status", (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Create Invoice Status
    insertInvoiceStatus: (data, result) => {
        db.query("INSERT INTO invoice_status VALUES ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Update Invoice Status
    updateInvoiceStatus: (data, invoiceStatusID, result) => {
        db.query("UPDATE invoice_status SET paymentDescription = ?, invoiceStatus = ? WHERE invoiceStatusID = ?", [data.paymentDescription, data.invoiceStatus, invoiceStatusID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Delete Invoice Status
    deleteInvoiceStatus: (invoiceStatusID, result) => {
        db.query("DELETE FROM invoice_status WHERE invoiceStatusID = ?", [invoiceStatusID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
}