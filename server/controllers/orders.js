const Orders = require('../models/productOrdersModel')

module.exports = {

    //Create New Order
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

    //Retrieve Order
    showOrders: (req, res) => {
        Orders.getProductOrders((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Order
    showOrderById: (req, res) => {
        Orders.getProductOrderByID(req.params.productOrderID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Order
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

    //Delete Order
    deleteOrder: (req, res) => {
        const productOrderID = req.params.productID;
        Orders.deleteProductOrder(productOrderID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}