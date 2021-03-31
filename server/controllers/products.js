import { deleteProductById, getProductById, getProducts, insertProduct, updateProductById } from "../models/productsModel.js"

//Create New Product
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Product
export const showProductById = (req, res) => {
    getProductById(req.params.productID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Product
export const updateProduct = (req, res) => {
    const data  = req.body;
    const productID    = req.params.productID;
    updateProductById(data, productID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Delete Product
export const deleteProduct = (req, res) => {
    const productID = req.params.productID;
    deleteProductById(productID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
