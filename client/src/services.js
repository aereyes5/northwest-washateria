import axios from 'axios'

const customerUrl = 'http://localhost:3000/customers'
const productUrl = 'http://localhost:3000/products'
const vendorURL = 'http://localhost:3000/vendors'
const invoiceURL = 'http://localhost:3000/invoices'
const employeeURL = 'http://localhost:3000/employees'
const countryURL = 'http://localhost:3000/countries'

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
    static getProductByID(productID){
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

/*---------------------------------------------------------------------------------*/
    //Get all vendors
    static getVendors(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${vendorURL}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

    static getVendorByName(vendorName){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${vendorURL}/${vendorName}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

    static getVendorByID(vendorID){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${vendorURL}/update/${vendorID}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

    static updateVendor(vendor){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.put(`${vendorURL}/${vendor.vendorID}`, {
                    vendorID: vendor.vendorID,
                    vendorName: vendor.vendorName,
                    type: vendor.type,
                    country: vendor.country,
                    vendorContact: vendor.vendorContact,
                    phoneNumber: vendor.phoneNumber,
                    email: vendor.email

                })
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    static insertVendor(vendor){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${vendorURL}`, {
                    vendorName: vendor.vendorName,
                    vendorType: vendor.type,
                    countryName: vendor.country,
                    vendorContactName: vendor.vendorContact,
                    phoneNumber: vendor.phoneNumber,
                    email: vendor.email

                })
                const data = res.data
                console.log(data)
                resolve(data)
            }catch(error){
                reject(`Unable to add new product\n${error}`);
            }
        })
    }

    static deleteVendor(vendorID){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.delete(`${vendorURL}/${vendorID}`)
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }




/*---------------------------------------------------------------------------------*/

    //CRUD Invoices 

    static getInvoices(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${invoiceURL}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

/*--------------------------------------------------------------------------------*/

//CRUD Employees

//Get all employees
static getEmployees(){
    return new Promise(async (resolve, reject) => {
        try{
            const res = await axios.get(`${employeeURL}`)
            const data = res.data 
            resolve(data)
        }catch(error) {
            reject(`${error}`);
        }
    })
}

//Insert Employee
static insertEmployee(employee){
    return new Promise(async (resolve, reject) => {
        try{
            const res = await axios.post(`${employeeURL}`, {
                employeeID: employee.employeeID,
                firstName: employee.firstName,
                lastName: employee.lastName,
                startDate: employee.startDate,
                endDate: employee.endDate,
                position: employee.position,
                loginID: employee.loginID
            })
            const data = res.data
            console.log(data)
            resolve(data)
        }catch(error){
            reject(`Unable to add new product\n${error}`);
        }
    })
}

//Delete Employee
static deleteEmployee(employeeID){
    return new Promise(async (resolve, reject) => {
        try{
            const res = await axios.delete(`${employeeURL}/${employeeID}`)
            const data = res.data
            resolve (data)
        }catch(error){
            reject(`${error}`)
        }
    })
}

//Update Employee
static updateEmployee(employee){
    return new Promise(async (resolve, reject) => {
        try{
            const res = await axios.put(`${employeeURL}/${employee.employeeID}`, {
                employeeID: employee.employeeID,
                firstName: employee.firstName,
                lastName: employee.lastName,
                startDate: employee.startDate,
                endDate: employee.endDate,
                position: employee.position,
                loginID: employee.loginID
            })
            const data = res.data
            resolve (data)
        }catch(error){
            reject(`${error}`)
        }
    })
}

//Get one employee by ID
static getEmployeeByID(employeeID){
    return new Promise(async (resolve, reject) => {
        try{
            const res = await axios.get(`${employeeURL}/${employeeID}`);
            const data = res.data
            resolve(data)
        }catch(error) {
            reject(`${error}`);
        }
    })
}

/*---------------------------------------------------------------------------------*/

    static getCountries(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${countryURL}`);
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

}


export default Services