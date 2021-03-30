import db from "../config/database.js"

//Retrieve all Products
export const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Product
export const insertProduct = (data, result) => {
    db.query("INSERT INTO products VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Product
export const updateProduct = (data, id, result) => {
    db.query("UPDATE products SET Product_Price = ?, Product_Name = ? WHERE Products_ID = ?", [data.Product_Price, data.Product_Name, id], (err, results) => {             
        if(err) {
            console.log(err);4
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Product
export const deleteProduct = (id, result) => {
    db.query("DELETE FROM product WHERE Products_ID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}