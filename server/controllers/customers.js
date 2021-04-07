const Customers = require('../models/customerModel')

module.exports = {

//Create New Customer
createCustomer: (req, res) => {
    const data = req.body;
    Customers.insertCustomer(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Retrieve Customers
showCustomers: (req, res) => {
    Customers.getCustomers((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
},

//Retrieve One Customer By Phone
showCustomerByPhone: (req, res) => {
    const phoneNumber = req.params.phoneNumber;
    Customers.getCustomerByPhone(phoneNumber, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Update Customer
updateCustomer: (req, res) => {
    const data  = req.body;
    const customerID    = req.params.customerID;
    Customers.updateCustomerById(data, customerID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Delete Customer
deleteCustomer: (req, res) => {
    const customerID = req.params.customerID;
    Customers.deleteCustomerById(customerID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
}