import express from "express"
import {showCustomers, createCustomer} from "../controllers/customers.js"

const router = express.Router()

//Retrieve All Customers
router.get('/customers', showCustomers)

//Create New Customer
router.post('/customers', createCustomer)

export default router