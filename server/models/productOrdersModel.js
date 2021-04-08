const db = require('../config/database')

module.exports = {

//Retrieve all Product Orders
getProductOrders: (result) => {
    db.query("SELECT * FROM productorders", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Create Product Order
insertProductOrder: (data, result) => {
    db.query("INSERT INTO productorders VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Update Product Order
updateProductOrderById: (data, productOrderID, result) => {
    db.query("UPDATE products SET orderDate = ?, productID = ?, orderQuantity = ?, orderTotalPrice = ?, vendorID = ?, vendorStatusID = ? WHERE productID = ?", [data.orderDate, data.productID, data.orderQuantity, data.orderTotalPrice, data.vendorID, data.vendorStatusID, productOrderID], (err, results) => {             
        if(err) {
            console.log(err);4
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Delete Product Order
deleteProductOrder: (productOrderID, result) => {
    db.query("DELETE FROM productorders WHERE ProductOrders_ID = ?", [productOrderID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
}