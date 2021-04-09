const Login = require('../models/loginModel')

module.exports = {

    //Create New Login
    createLogin: (req, res) => {
        const data = req.body;
        Login.insertLogin(data, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Retrieve Logins
    showLogins: (req, res) => {
        Login.getLogins((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    },

    //Retrieve One Login
    showLoginById: (req, res) => {
        Login.getLoginById(req.params.loginID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Update Login
    updateLogin: (req, res) => {
        const data = req.body;
        const employeeID = req.params.employeeID;
        Login.updateLoginById(data, employeeID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    },

    //Delete Login
    deleteLogin: (req, res) => {
        const employeeID = req.params.employeeID;
        Login.deleteLoginById(employeeID, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results);
            }
        });
    }
}