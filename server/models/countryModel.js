import db from "../config/database.js"

//Retrieve all Countries
export const getCountries = (result) => {
    db.query("SELECT * FROM country", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Create Country
export const insertCountry = (data, result) => {
    db.query("INSERT INTO country VALUES ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Update Country
export const updateCountry = (data, id, result) => {
    db.query("UPDATE country SET vendorsID = ?, countryName = ? WHERE countryID = ?", [data.vendorsID, data.countryName, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Country
export const deleteCountry = (id, result) => {
    db.query("DELETE FROM country WHERE countryID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}