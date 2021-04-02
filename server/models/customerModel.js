import db from "../config/database.js"


//Create Customer
export const insertCustomer = (data, result) => {
    db.query("INSERT INTO customers SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve All Customers
export const getCustomers = (result) => {
    db.query("SELECT * FROM customers", (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else{
            result(null, results)
        }
    })
}

//Retrieve One Customer
export const getCustomerByPhone = (phoneNumber, result) => {
    db.query("SELECT * FROM customers WHERE phoneNumber = ?", [phoneNumber], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Customer
export const updateCustomerById = (data, customerID, result) => {
    db.query("UPDATE customers SET firstName = ?, lastName = ?, phoneNumber = ?, email = ? WHERE customerID = ?", [data.firstName, data.lastName, data.phoneNumber, data.email, customerID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Customer
export const deleteCustomerById = (customerID, result) => {
    db.query("DELETE FROM customers WHERE customerID = ?", [customerID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}