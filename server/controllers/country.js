import { getCountries, getCountryByName } from "../models/countryModel.js"


//Retrieve 
export const showCountries = (req, res) => {
    getCountries((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One country
export const showCountryByName = (req, res) => {
    const countryName = req.params.countryName;
    getCountryByName(countryName, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}




