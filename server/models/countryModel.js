const db = require('../config/database')

module.exports = {

    //Retrieve all Countries
    getCountries: (result) => {
        db.query("SELECT * FROM country", (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Retrieve One Country
    getCountryByName: (countryName, result) => {
        db.query("SELECT * FROM country WHERE countryName = ?", [countryName], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Create Country
    insertCountry: (data, result) => {
        db.query("INSERT INTO country VALUES ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Update Country
    updateCountry: (data, countryID, result) => {
        db.query("UPDATE country SET countryName = ? WHERE countryID = ?", [data.countryName, countryID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Delete Country
    deleteCountry: (countryID, result) => {
        db.query("DELETE FROM country WHERE countryID = ?", [countryID], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }

}