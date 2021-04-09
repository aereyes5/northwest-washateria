const Invoices = require('../models/invoiceModel')

module.exports = {

    //Create New Invoice
    createInvoice: (req, res) => {
        const data = req.body;
        Invoices.insertInvoice(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Invoices
    showInvoices: (req, res) => {
        Invoices.getInvoice((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Invoice
    showInvoiceById: (req, res) => {
        Invoices.getInvoiceById(req.params.invoiceID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Invoice
    updateInvoice: (req, res) => {
        const data = req.body;
        const invoiceID = req.params.invoiceID;
        Invoices.updateInvoiceById(data, invoiceID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }

    // //Delete Invoice
    // export const deleteInvoice = (req, res) => {
    //     const invoiceID = req.params.invoiceID;
    //     deleteInvoiceById(invoiceID, (err, results) => {
    //         if (err){
    //             res.send(err);
    //         }else{
    //             res.json(results);
    //         }
    //     });
    // }

}