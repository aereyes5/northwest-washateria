import db from "../config/database.js"


//Create Employee
export const insertEmployee = (data, result) => {
    db.query("INSERT INTO employees SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve All Employees
export const getEmployees = (result) => {
    db.query("SELECT * FROM employees", (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else{
            result(null, results)
        }
    })
}

//Retrieve One Employee
export const getEmployeeById = (employeeID, result) => {
    db.query("SELECT * FROM employees WHERE employeeID = ?", [employeeID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Update Employee
export const updateEmployeeById = (data, employeeID, result) => {
    db.query("UPDATE employees SET firstName = ?, lastName = ?, startDate = ?, endDate = ?, position = ?, loginID = ? WHERE employeeID = ?", [data.firstName, data.lastName, data.startDate, data.endDate, data.position, data.loginID, employeeID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Employee
export const deleteEmployeeById = (employeeID, result) => {
    db.query("DELETE FROM employees WHERE employeeID = ?", [employeeID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}