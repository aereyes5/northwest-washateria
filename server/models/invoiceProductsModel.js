const db = require('../config/database')

module.exports = {
    getInvoiceProductsByDate: (date, result) => {
        db.query("call getInvoiceProductsByDate(?)", [date], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    },

    insertInvoiceProducts: (data, result) => {
        db.query("call insertInvoiceProducts(?,?,?,?,?)", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
    
}