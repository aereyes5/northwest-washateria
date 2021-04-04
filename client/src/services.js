import axios from 'axios'

const customerUrl = 'http://localhost:3000/customers'

class Services{

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

    //insert customer
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

    //delete customer
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

    //update customer
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

    //retrieve one customer by phone number
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
}

export default Services