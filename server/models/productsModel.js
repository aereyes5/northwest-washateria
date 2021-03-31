import db from "../config/database.js"

//Create Product
export const insertProduct = (data, result) => {
    db.query("INSERT INTO products SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

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

//Retrieve One Product
export const getProductById = (productID, result) => {
    db.query("SELECT * FROM products WHERE productID = ?", [productID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//Update Product
export const updateProductById = (data, id, result) => {
    db.query("UPDATE products SET productName = ?, productPrice = ? WHERE productID = ?", [data.productName, data.productPrice, id], (err, results) => {             
        if(err) {
            console.log(err);4
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Product
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM products WHERE productID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}