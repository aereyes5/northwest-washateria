import db from "../config/database.js"


//Create Login
export const insertLogin = (data, result) => {
    db.query("INSERT INTO login SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve All Logins
export const getLogin = (result) => {
    db.query("SELECT * FROM login", (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else{
            result(null, results)
        }
    })
}

//Retrieve One Login
export const getLoginById = (employeeID, result) => {
    db.query("SELECT * FROM login WHERE employeeID = ?", [employeeID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Update Login
export const updateLoginById = (data, employeeID, result) => {
    db.query("UPDATE login SET username = ?, pswd = ?, access = ? WHERE employeeID = ?", [data.username, data.pswd, data.access, employeeID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Login
export const deleteLoginById = (employeeID, result) => {
    db.query("DELETE FROM login WHERE employeeID = ?", [employeeID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}