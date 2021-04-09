const Products = require('../models/productsModel')

module.exports = {

    //Create New Product
    createProduct: (req, res) => {
        const data = req.body;
        Products.insertProduct(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Products
    showProducts: (req, res) => {
        Products.getProducts((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve Products
    showProductNames: (req, res) => {
        Products.getProductNames((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Product
    showProductById: (req, res) => {
        Products.getProductById(req.params.productID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Product
    updateProduct: (req, res) => {
        const data = req.body;
        const productID = req.params.productID;
        Products.updateProductById(data, productID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Delete Product
    deleteProduct: (req, res) => {
        const productID = req.params.productID;
        Products.deleteProductById(productID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}