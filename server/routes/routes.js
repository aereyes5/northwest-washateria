import express from "express";
import {showCustomers, createCustomer, updateCustomer, deleteCustomer, showCustomerByPhone} from "../controllers/customers.js"
import { createEmployee, showEmployees, showEmployeeById, updateEmployee, deleteEmployee } from "../controllers/employees.js";
import {createInvoice, deleteInvoice, showInvoiceById, showInvoices, updateInvoice} from "../controllers/invoices.js";
import { createLogin, deleteLogin, showLoginById, showLogins, updateLogin } from "../controllers/login.js";
import { createProduct, deleteProduct, showProductById, showProducts, updateProduct } from "../controllers/products.js";
import { createService, deleteService, showServiceById, showServices, updateService } from "../controllers/services.js";
import { createVendor, deleteVendor, showVendorByName, showVendors, updateVendor } from "../controllers/vendors.js";
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

//CRUD INVOICES

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
router.post('/products', createProduct)

//Retrieve All Products
router.get('/products', showProducts)

//Retrieve One Product
router.get('/products/:productID', showProductById);

//Update Product
router.put('/products/:productID', updateProduct);

//Delete Product
router.delete('/products/:productID', deleteProduct);

/*--------------------------------------------------------------------------------*/

//CRUD SERVICES

//Create New Service
router.post('/services', createService)

//Retrieve All Services
router.get('/services', showServices)

//Retrieve One Service
router.get('/services/:serviceID', showServiceById);

//Update Service
router.put('/services/:serviceID', updateService);

//Delete Service
router.delete('/services/:serviceID', deleteService);

/*--------------------------------------------------------------------------------*/

//CRUD EMPLOYEES

//Create New Employee
router.post('/employees', createEmployee)

//Retrieve All Employees
router.get('/employees', showEmployees)

//Retrieve One Employee
router.get('/employees/:employeeID', showEmployeeById);

//Update Employee
router.put('/employees/:employeeID', updateEmployee);

//Delete Employee
router.delete('/employees/:employeeID', deleteEmployee);

/*--------------------------------------------------------------------------------*/

//CRUD LOGIN

//Create New Login
router.post('/login', createLogin)

//Retrieve All Logins
router.get('/login', showLogins)

//Retrieve One Login
router.get('/login/:employeeID', showLoginById);

//Update Login
router.put('/login/:employeeID', updateLogin);

//Delete Login
router.delete('/login/:employeeID', deleteLogin);

/*--------------------------------------------------------------------------------*/

//CRUD VENDORS

//Create New Vendor
router.post('/vendors', createVendor)

//Retrieve All Vendors
router.get('/vendors', showVendors)

//Retrieve One Vendor
router.get('/vendors/:vendorName', showVendorByName);

//Update Vendor
router.put('/vendors/:vendorID', updateVendor);

//Delete Vendor
router.delete('/vendors/:vendorID', deleteVendor);

export default router