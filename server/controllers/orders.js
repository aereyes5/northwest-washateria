const Orders = require('../models/productOrdersModel')

module.exports = {

//Create New Product
createOrders: (req, res) => {
    const data = req.body;
    Orders.insertProductOrder(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Retrieve Products
showOrders: (req, res) => {
    Orders.getProductOrders((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
},

//Retrieve One Product
showOrderById: (req, res) => {
    Orders.getOrdersById(req.params.orderID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Update Product
updateOrder: (req, res) => {
    const data  = req.body;
    const orderID    = req.params.orderID;
    Orders.updateProductOrderById(data, orderID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Delete Product
deleteOrder: (req, res) => {
    const productID = req.params.productID;
    Orders.deleteProductOrder(productID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
}