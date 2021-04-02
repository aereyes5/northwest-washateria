import {getInvoice, getInvoiceById, insertInvoice, updateInvoiceById} from "../models/invoiceModel.js"

//Create New Invoice
export const createInvoice = (req, res) => {
    const data = req.body;
    insertInvoice(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Invoices
export const showInvoices = (req, res) => {
    getInvoice((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Invoice
export const showInvoiceById = (req, res) => {
    getInvoiceById(req.params.invoiceID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Invoice
export const updateInvoice = (req, res) => {
    const data  = req.body;
    const invoiceID    = req.params.invoiceID;
    updateInvoiceById(data, invoiceID, (err, results) => {
        if (err){
            res.send(err);
        }else{
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
