import express from "express";
import {showCustomers, createCustomer, updateCustomer, deleteCustomer, showCustomerByPhone} from "../controllers/customers.js"
import {createInvoice, deleteInvoice, showInvoiceById, showInvoices, updateInvoice} from "../controllers/invoices.js";
const router = express.Router()

//CRUD CUSTOMERS

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

/*--------------------------------------------------------------------------------*/

//CRU INVOICES

//Create New Invoice
router.post('/invoices', createInvoice)

//Retrieve All Invoices
router.get('/invoices', showInvoices)

//Retrieve One Invoice
router.get('/invoices/:invoiceID', showInvoiceById);

//Update Invoice
router.put('/invoices/:invoiceID', updateInvoice);

// //Delete Invoice
// router.delete('/invoices/:invoiceID', deleteInvoice);

/*--------------------------------------------------------------------------------*/

//CRUD PRODUCTS

//Create New Product
router.post('/products', createCustomer)

//Retrieve All Products
router.get('/products', showCustomers)

//Retrieve One Product
router.get('/products/:phoneNumber', showCustomerByPhone);

//Update Product
router.put('/products/:customerID', updateCustomer);

//Delete Product
router.delete('/products/:customerID', deleteCustomer);

export default router