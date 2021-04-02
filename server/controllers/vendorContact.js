import { insertVendorContact } from "../models/vendorContactModel.js"



//Create New Customer
export const createCustomer = (req, res) => {
    const data = req.body;
    insertVendorContact(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Customers
export const showCustomers = (req, res) => {
    getCustomers((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Customer
export const showCustomerByPhone = (req, res) => {
    getCustomerByPhone(req.params.phoneNumber, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Customer
export const updateCustomer = (req, res) => {
    const data  = req.body;
    const customerID    = req.params.customerID;
    updateCustomerById(data, customerID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Delete Customer
export const deleteCustomer = (req, res) => {
    const customerID = req.params.customerID;
    deleteCustomerById(customerID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
