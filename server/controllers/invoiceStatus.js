const Invoices = require('../models/invoiceStatusModel')

module.exports = {

    showInvoiceStatus: (req, res) => {
        Invoices.getInvoiceStatus((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },
}