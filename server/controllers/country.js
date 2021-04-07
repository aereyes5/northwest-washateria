const Countries = require('../models/countryModel')

module.exports = {

//Retrieve 
showCountries: (req, res) => {
    Countries.getCountries((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
},

//Retrieve One country
showCountryByName: (req, res) => {
    const countryName = req.params.countryName;
    Countries.getCountryByName(countryName, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

}


