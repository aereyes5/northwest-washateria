const express = require('express'),
    Customers = require('../controllers/customers'),
    Employees = require('../controllers/employees'),
    Invoices = require('../controllers/invoices'),
    Login = require('../controllers/login'),
    Products = require('../controllers/products'),
    Services = require('../controllers/services'),
    Vendors = require('../controllers/vendors'),
    VendorContact = require('../controllers/vendorContact'),
    Orders = require('../controllers/orders'),
    Status = require('../controllers/invoiceStatus'),
    Countries = require('../controllers/country');
router = new express.Router()


//LOGIN
router.get('/login', Login.showLogins)

router.get('/login/:loginID', Login.showLoginById)

/*--------------------------------------------------------------------------------*/

//CRUD CUSTOMERS

//Create New Customer
router.post('/customers', Customers.createCustomer)

//Retrieve All Customers
router.get('/customers', Customers.showCustomers)

//Retrieve One Customer By Phone
router.get('/customers/:phoneNumber', Customers.showCustomerByPhone);

//Update Customer
router.put('/customers/:customerID', Customers.updateCustomer);

//Delete Customer
router.delete('/customers/:customerID', Customers.deleteCustomer);

/*--------------------------------------------------------------------------------*/

//CRUD INVOICES

//Create New Invoice
router.post('/invoices', Invoices.createInvoice)

//Retrieve All Invoices
router.get('/invoices', Invoices.showInvoices)

//Retrieve One Invoice
router.get('/invoices/:invoiceID', Invoices.showInvoiceById);

//Update Invoice
router.put('/invoices/:invoiceID', Invoices.updateInvoice);

router.get('/invoiceStatus', Status.showInvoiceStatus)

// //Delete Invoice
// router.delete('/invoices/:invoiceID', deleteInvoice);

/*--------------------------------------------------------------------------------*/

//CRUD PRODUCTS

//Create New Product
router.post('/products', Products.createProduct)

//Retrieve All Products
router.get('/products', Products.showProducts)

router.get('/products/productNames', Products.showProductNames)

//Retrieve One Product
router.get('/products/:productID', Products.showProductById);

//Update Product
router.put('/products/:productID', Products.updateProduct);

//Delete Product
router.delete('/products/:productID', Products.deleteProduct);

/*--------------------------------------------------------------------------------*/

//CRUD SERVICES

//Create New Service
router.post('/services', Services.createService)

//Retrieve All Services
router.get('/services', Services.showServices)

//Retrieve One Service
router.get('/services/:serviceID', Services.showServiceById);

//Update Service
router.put('/services/:serviceID', Services.updateService);

//Delete Service
router.delete('/services/:serviceID', Services.deleteService);

/*--------------------------------------------------------------------------------*/

//CRUD EMPLOYEES

//Create New Employee
router.post('/employees', Employees.createEmployee)

//Retrieve All Employees
router.get('/employees', Employees.showEmployees)

//Retrieve One Employee
router.get('/employees/:employeeID', Employees.showEmployeeById);

//Update Employee
router.put('/employees/:employeeID', Employees.updateEmployee);

//Delete Employee
router.delete('/employees/:employeeID', Employees.deleteEmployee);

/*--------------------------------------------------------------------------------*/

//CRUD LOGIN

//Create New Login
router.post('/login', Login.createLogin)

//Retrieve All Logins
router.get('/login', Login.showLogins)

//Retrieve One Login
router.get('/login/:employeeID', Login.showLoginById);

//Update Login
router.put('/login/:employeeID', Login.updateLogin);

//Delete Login
router.delete('/login/:employeeID', Login.deleteLogin);

/*--------------------------------------------------------------------------------*/

//CRUD VENDORS

//Create New Vendor
router.post('/vendors', Vendors.createVendor)

//Retrieve All Vendors
router.get('/vendors', Vendors.showVendors)

//Retrieve One Vendor
router.get('/vendors/:vendorName', Vendors.showVendorByName);

router.get('/vendors/update/:vendorID', Vendors.showVendorByID);

//Update Vendor
router.put('/vendors/:vendorID', Vendors.updateVendor);

//Delete Vendor
router.delete('/vendors/:vendorID', Vendors.deleteVendor);

/*--------------------------------------------------------------------------------*/

router.get('/vendor_contact', VendorContact.showVendorContact);

//Retrieve One Vendor Contact
router.get('/vendor_contact/:vendorContactID', VendorContact.showVendorContactByID);

//Update Vendor Contact
router.put('/vendor_contact/:vendorContactID', VendorContact.updateVendorContact);

/*--------------------------------------------------------------------------------*/

router.get('/countries', Countries.showCountries);

router.get('/countries/:countryName', Countries.showCountryByName);

/*--------------------------------------------------------------------------------*/

//Retrieve All Product Orders
router.get('/orders', Orders.showOrders);

//Create Order
router.post('/orders', Orders.createOrders);

//Retrieve One order
router.get('/orders/:productOrderID', Orders.showOrderById);

//Update Product Order Status
router.put('/orders/:productOrderID', Orders.updateOrder);


module.exports = router