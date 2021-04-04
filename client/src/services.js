import axios from 'axios'

const customerUrl = 'http://localhost:3000/customers'
const productUrl = 'http://localhost:3000/products'

class Services{
    //CRUD Customers

    //Get all customers
    static getCustomers(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${customerUrl}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

    //Insert customer
    static insertCustomer(customer){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${customerUrl}`, {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phoneNumber: customer.phoneNumber,
                    email: customer.email
                })
                const data = res.data
                console.log(data)
                resolve(data)
            }catch(error){
                reject(`Unable to add new customer\n${error}`);
            }
        })
    }

    //Delete customer
    static deleteCustomer(customerID){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.delete(`${customerUrl}/${customerID}`)
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    //Update customer
    static updateCustomer(customer){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.put(`${customerUrl}/${customer.customerID}`, {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phoneNumber: customer.phoneNumber,
                    email: customer.email
                })
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    } 

    //Retrieve one customer by phone number
    static getCustomerByPhone(phoneNumber){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${customerUrl}/${phoneNumber}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }
    
    /*--------------------------------------------------------------------------------*/

    //CRUD Products

    //Get all products
    static getProducts(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${productUrl}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

    //Insert Product
    static insertProduct(product){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${productUrl}`, {
                    productID: product.productID,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    vendorID: product.vendorID
                })
                const data = res.data
                console.log(data)
                resolve(data)
            }catch(error){
                reject(`Unable to add new product\n${error}`);
            }
        })
    }

    //Delete Product
    static deleteProduct(productID){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.delete(`${productUrl}/${productID}`)
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    //Update Product
    static updateProduct(product){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.put(`${productUrl}/${product.productID}`, {
                    productID: product.productID,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    vendorID: product.vendorID
                })
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    //Get one product by ID
    static getProductByProductID(productID){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${productUrl}/${productID}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

}

export default Services