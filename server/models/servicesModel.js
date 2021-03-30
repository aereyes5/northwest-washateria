import db from "../config/database.js"

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

//Create Service
export const insertService = (data, result) => {
    db.query("INSERT INTO services VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Service
export const updateService = (data, id, result) => {
    db.query("UPDATE services SET Service_Name = ?, Service_Price = ? WHERE Services_ID = ?", [data.Service_Name, data.Service_Price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Service
export const deleteService = (id, result) => {
    db.query("DELETE FROM services WHERE Services_ID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}