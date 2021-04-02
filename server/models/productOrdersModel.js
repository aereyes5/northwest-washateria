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

//Update Product Order
export const updateProductOrderById = (data, productOrderID, result) => {
    db.query("UPDATE products SET orderDate = ?, productID = ?, orderQuantity = ?, orderTotalPrice = ?, vendorID = ?, vendorStatusID = ? WHERE productID = ?", [data.orderDate, data.productID, data.orderQuantity, data.orderTotalPrice, data.vendorID, data.vendorStatusID, productOrderID], (err, results) => {             
        if(err) {
            console.log(err);4
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Product Order
export const deleteProductOrder = (productOrderID, result) => {
    db.query("DELETE FROM productorders WHERE ProductOrders_ID = ?", [productOrderID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}