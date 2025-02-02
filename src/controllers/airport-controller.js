const { response } = require('express');
const {AirportService} = require('../services/index');

const airportService = new AirportService();


const create = async (req,res) => {
    try{
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Airport created succesfully",
            error:{}
        })
    } catch(error) {
        console.log("something wrong in create in controller airport");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to create airport succesfully",
            error:{error}
        })
    }
    
}


const destroy = async (req,res) => {
    try{
        const response = await airportService.deleteAirport(req.params.Id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Airport deleted succesfully",
            error:{}
        })
    } catch(error) {
        console.log("something wrong in destroy controller airport");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to delete airport succesfully",
            error:{error}
        })
    }
    
}

const get = async (req,res) => {
    try{
        console.log(req.params.Id);
        const airport = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data:airport,
            success:true,
            message:"Airport found succesfully",
            error:{}
        })
    } catch(error) {
        console.log("something wrong in get controller airport");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to get a airport succesfully",
            error:{error}
        })
    }
    
}

const getAll = async (req,res) => {
    try{
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data:airports,
            success:true,
            message:"succesfully found all the Airports",
            error:{}
        })
    } catch(error) {
        console.log("something wrong in getall controller airport");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to get all airport succesfully",
            error:{error}
        })
    }
    
}


const update = async (req,res) => {
    try{
        const airport = await airportService.updateAirport(req.params.Id,req.body);
        return res.status(200).json({
            data:airport,
            success:true,
            message:"succesfully updated the Airports",
            error:{}
        })
    } catch(error) {
        console.log("something wrong in update controller airport");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to update airport succesfully",
            error:{error}
        })
    }
    
}   



module.exports = {
    create,
    destroy,
    get,
    getAll,
    update,
   
}