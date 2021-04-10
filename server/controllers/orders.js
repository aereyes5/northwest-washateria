const Orders = require('../models/productOrdersModel')

module.exports = {

    //Create New Product
    createOrders: (req, res) => {
        const data = req.body;
        Orders.insertProductOrder(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Products
    showOrders: (req, res) => {
        Orders.getProductOrders((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Product
    showOrderById: (req, res) => {
        Orders.getProductOrderByID(req.params.productOrderID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Product
    updateOrder: (req, res) => {
        const productOrderID = req.params.productOrderID;
        const statusName = req.params.statusName;
        Orders.updateProductOrderStatus(productOrderID, statusName, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Delete Product
    deleteOrder: (req, res) => {
        const productID = req.params.productID;
        Orders.deleteProductOrder(productID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}