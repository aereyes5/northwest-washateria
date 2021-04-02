import db from "../config/database.js"


//Create Service
export const insertService = (data, result) => {
    db.query("INSERT INTO services SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve all Services
export const getServices = (result) => {
    db.query("SELECT * FROM services", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve One Product
export const getServiceById = (serviceID, result) => {
    db.query("SELECT * FROM services WHERE serviceID = ?", [serviceID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//Update Service
export const updateServiceById = (data, serviceID, result) => {
    db.query("UPDATE services SET serviceName = ?, servicePrice = ? WHERE serviceID = ?", [data.serviceName, data.servicePrice, serviceID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Service
export const deleteServiceById = (serviceID, result) => {
    db.query("DELETE FROM services WHERE serviceID = ?", [serviceID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
