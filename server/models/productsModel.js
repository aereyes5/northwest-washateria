const db = require('../config/database')

module.exports = {

    //Create Product
    insertProduct: (data, result) => {
        db.query("call insertProduct(?,?,?,?,?,?,?,?)", [data.productName, data.productPrice, data.vendorName, data.vendorType, data.country, data.vendorContact, data.phoneNumber, data.email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Retrieve all Products
    getProducts: (result) => {
        db.query("call getProducts()", (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },


    //Retrieve One Product
    getProductById: (productID, result) => {
        db.query("call getProductByID(?)", [productID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Update Product
    updateProductById: (data, productID, result) => {
        db.query("UPDATE products SET productName = ?, productPrice = ?, vendorID = ? WHERE productID = ?", [data.productName, data.productPrice, data.vendorID, productID], (err, results) => {
            if (err) {
                console.log(err);
                4
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Delete Product
    deleteProductById: (productID, result) => {
        db.query("DELETE FROM products WHERE productID = ?", [productID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }

}