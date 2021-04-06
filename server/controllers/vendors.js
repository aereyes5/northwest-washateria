import { deleteVendorById, getVendorByID, getVendorByName, getVendors, insertVendor, updateVendorById } from "../models/vendorsModel.js"



//Create New Vendor
export const createVendor = (req, res) => {
    const data = req.body;
    insertVendor(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Retrieve Vendors
export const showVendors = (req, res) => {
    getVendors((err, results) => {
        if(err){
            res.send(err)
        } else{
            res.json(results)
        }
    })
}

//Retrieve One Vendor
export const showVendorByName = (req, res) => {
    getVendorByName(req.params.vendorName, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showVendorByID = (req, res) => {
    getVendorByID(req.params.vendorID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Update Vendor
export const updateVendor = (req, res) => {
    const data  = req.body;
    const vendorID    = req.params.vendorID;
    updateVendorById(data, vendorID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Delete Vendor
export const deleteVendor = (req, res) => {
    const vendorID = req.params.vendorID;
    deleteVendorById(vendorID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
