import db from "../config/database.js"

//Retrieve all Countries
export const getCountries = (result) => {
    db.query("SELECT countryName FROM country", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Retrieve One Country
export const getCountryByName = (countryName, result) => {
    db.query("SELECT * FROM country WHERE countryName = ?", [countryName], (err, results) => {             
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
export const updateCountry = (data, countryID, result) => {
    db.query("UPDATE country SET countryName = ? WHERE countryID = ?", [data.countryName, countryID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Country
export const deleteCountry = (countryID, result) => {
    db.query("DELETE FROM country WHERE countryID = ?", [countryID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}