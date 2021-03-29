import db from "../config/database.js"

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

//Create Customer
export const insertCustomer = (data, result) => {
    db.query("INSERT INTO customers VALUES ?", [data], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else{
            result(null, results)
        }
    })
}
