import { getVendorContact, getVendorContactById, insertVendorContact, updateVendorContactById } from "../models/vendorContactModel.js"



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

//Retrieve Vendors
export const showVendorContact = (req, res) => {
    getVendorContact((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Vendor
export const showVendorContactByID = (req, res) => {
    getVendorContactById(req.params.vendorContactID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Vendor
export const updateVendorContact = (req, res) => {
    const data  = req.body;
    const vendorContactID = req.params.vendorContactID;
    updateVendorContactById(data, vendorContactID, (err, results) => {
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
