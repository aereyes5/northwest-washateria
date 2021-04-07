const db = require('../config/database')

module.exports = {

//Create Customer
insertCustomer: (data, result) => {
    db.query("INSERT INTO customers SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

//Retrieve All Customers
getCustomers: (result) => {
    db.query("SELECT * FROM customers", (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else{
            result(null, results)
        }
    })
},

//Retrieve One Customer By Phone
getCustomerByPhone: (phoneNumber, result) => {
    db.query("SELECT * FROM customers WHERE phoneNumber = ?", [phoneNumber], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

// Update Customer
updateCustomerById: (data, customerID, result) => {
    db.query("UPDATE customers SET firstName = ?, lastName = ?, phoneNumber = ?, email = ? WHERE customerID = ?", [data.firstName, data.lastName, data.phoneNumber, data.email, customerID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},

// Delete Customer
deleteCustomerById: (customerID, result) => {
    db.query("DELETE FROM customers WHERE customerID = ?", [customerID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


}