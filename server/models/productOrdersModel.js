import db from "../config/database.js"

//Retrieve all Product Orders
export const getProductsOrder = (result) => {
    db.query("SELECT * FROM productorders", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Product Order
export const insertProductOrder = (data, result) => {
    db.query("INSERT INTO productorders VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Product Order
export const deleteProductOrder = (id, result) => {
    db.query("DELETE FROM productorders WHERE ProductOrders_ID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}