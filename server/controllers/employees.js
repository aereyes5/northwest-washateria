const Employees = require('../models/employeesModel')

module.exports = {

//Create New Employee
createEmployee: (req, res) => {
    const data = req.body;
    Employees.insertEmployee(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Retrieve Employees
showEmployees: (req, res) => {
    Employees.getEmployees((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
},

//Retrieve One Employee
showEmployeeById: (req, res) => {
    Employees.getEmployeeById(req.params.employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Update Employee
updateEmployee: (req, res) => {
    const data  = req.body;
    const employeeID    = req.params.employeeID;
    Employees.updateEmployeeById(data, employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//Delete Employee
deleteEmployee: (req, res) => {
    const employeeID = req.params.employeeID;
    Employees.deleteEmployeeById(employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
}