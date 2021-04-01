import { deleteEmployeeById, getEmployeeById, getEmployees, insertEmployee, updateEmployeeById } from "../models/employeesModel.js"



//Create New Employee
export const createEmployee = (req, res) => {
    const data = req.body;
    insertEmployee(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Employees
export const showEmployees = (req, res) => {
    getEmployees((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Employee
export const showEmployeeById = (req, res) => {
    getEmployeeById(req.params.employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Employee
export const updateEmployee = (req, res) => {
    const data  = req.body;
    const employeeID    = req.params.employeeID;
    updateEmployeeById(data, employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Delete Employee
export const deleteEmployee = (req, res) => {
    const employeeID = req.params.employeeID;
    deleteEmployeeById(employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
