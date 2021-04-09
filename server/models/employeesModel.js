const db = require('../config/database')

module.exports = {

    //Create Employee
    insertEmployee: (data, result) => {
        db.query("INSERT INTO employees SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Retrieve All Employees
    getEmployees: (result) => {
        db.query("call getEmployees()", (err, results) => {
            if (err) {
                console.log(err)
                result(err, null)
            } else {
                result(null, results)
            }
        })
    },

    //Retrieve One Employee
    getEmployeeById: (employeeID, result) => {
        db.query("call getEmployeeByID(?)", [employeeID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    },

    // Update Employee
    updateEmployeeById: (data, employeeID, result) => {
        db.query("UPDATE employees SET firstName = ?, lastName = ?, startDate = ?, endDate = ?, position = ?, loginID = ? WHERE employeeID = ?", [data.firstName, data.lastName, data.startDate, data.endDate, data.position, data.loginID, employeeID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    // Delete Employee
    deleteEmployeeById: (employeeID, result) => {
        db.query("DELETE FROM employees WHERE employeeID = ?", [employeeID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }

}