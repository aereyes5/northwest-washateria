import { getServiceById, getServices, insertService, updateServiceById, deleteServiceById } from "../models/servicesModel.js"

//Create New Service
export const createService = (req, res) => {
    const data = req.body;
    insertService(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Services
export const showServices = (req, res) => {
    getServices((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Service
export const showServiceById = (req, res) => {
    getServiceById(req.params.serviceID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Service
export const updateService = (req, res) => {
    const data  = req.body;
    const serviceID    = req.params.serviceID;
    updateServiceById(data, serviceID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Delete Service
export const deleteService = (req, res) => {
    const serviceID = req.params.serviceID;
    deleteServiceById(serviceID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
