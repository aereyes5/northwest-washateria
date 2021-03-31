import express from "express";
import {showCustomers, createCustomer, updateCustomer, deleteCustomer, showCustomerByPhone} from "../controllers/customers.js"

const router = express.Router()

//Create New Customer
router.post('/customers', createCustomer)

//Retrieve All Customers
router.get('/customers', showCustomers)

//Retrieve One Customer
router.get('/customers/:phoneNumber', showCustomerByPhone);

//Update Customer
router.put('/customers/:customerID', updateCustomer);

//Delete Customer
router.delete('/customers/:customerID', deleteCustomer);

export default router