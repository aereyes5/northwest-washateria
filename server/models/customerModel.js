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

// Insert Customer into Database
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