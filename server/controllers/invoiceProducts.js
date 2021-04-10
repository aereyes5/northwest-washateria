const InvoiceProducts = require('../models/invoiceProductsModel')

module.exports = {
    showInvoiceProductsByDate: (req, res) => {
        InvoiceProducts.getInvoiceProductsByDate(req.params.date, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    createInvoiceProducts: (req, res) => {
        const data = req.body;
        InvoiceProducts.insertInvoiceProducts(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}
