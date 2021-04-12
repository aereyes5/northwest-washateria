const db = require('../config/database')

module.exports = {

    //Create Login
    insertLogin: (data, result) => {
        db.query("INSERT INTO login SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Retrieve All Logins
    getLogins: (result) => {
        db.query("SELECT * FROM login", (err, results) => {
            if (err) {
                console.log(err)
                result(err, null)
            } else {
                result(null, results)
            }
        })
    },

    //Retrieve One Login
    getLoginById: (loginID, result) => {
        db.query("call getEmployeeByLoginID(?)", [loginID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    },

    // Update Login
    updateLoginById: (data, loginID, result) => {
        db.query("UPDATE login SET username = ?, pswd = ? WHERE loginID = ?", [data.username, data.password, loginID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    // Delete Login
    deleteLoginById: (loginID, result) => {
        db.query("DELETE FROM login WHERE loginID = ?", [loginID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }

}