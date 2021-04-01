import { deleteLoginById, getLogin, getLoginById, insertLogin, updateLoginById } from "../models/loginModel.js"



//Create New Login
export const createLogin = (req, res) => {
    const data = req.body;
    insertLogin(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Logins
export const showLogins = (req, res) => {
    getLogin((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Login
export const showLoginById = (req, res) => {
    getLoginById(req.params.employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Login
export const updateLogin = (req, res) => {
    const data  = req.body;
    const employeeID    = req.params.employeeID;
    updateLoginById(data, employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Delete Login
export const deleteLogin = (req, res) => {
    const employeeID = req.params.employeeID;
    deleteLoginById(employeeID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
