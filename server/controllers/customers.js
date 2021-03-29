import {getCustomers, insertCustomer} from "../models/customersModel.js"

//Retrieve Customers
export const showCustomers = (req, res) => {
    getCustomers((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Create Customer
export const createCustomer = (req, res) => {
    const data = req.body
    insertCustomer(data, (err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}
