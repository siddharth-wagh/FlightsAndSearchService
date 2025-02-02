const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'Succesfully created a city',
            err:{}
        });

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to create a city",
            err:error
        })
    } 
}

const createMul = async (req,res) =>{
    try {
        const city = await cityService.createMultipleCities(req.body.cities);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'Succesfully created a city',
            err:{}
        });

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to create a city",
            err:error
        })
    } 
}

const destroy = async (req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'Succesfully deleted a city',
            err:{}
        });

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to delete the city",
            err:error
        })
    } 
}

const get = async (req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'Succesfully fetched a city',
            err:{}
        });

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to fetch a city",
            err:error
        })
    } 
}


const update = async (req,res) =>{
    try {
       
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success: true,
            message: 'Succesfully updated a city',
            err:{}
        });

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to update a city",
            err:error
        })
    } 
}

const getAll = async (req,res) =>{
    try{
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success: true,
            message: 'Succesfully fetched all cities',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able get all cities",
            err:error
        })
    }
}

const getAllAirports = async (req,res) => {
    try{
        console.log("Hey there")
        console.log(req.params.id);
        
        const airports = await cityService.getAllAirports(req.params.id);
        return res.status(200).json({ 
            data:airports,
            success:true,
            message:"succesfully found all the Airports",
            error:{}
        })
    } catch(error) {
        console.log("something wrong in getall controller city");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to get all airport succesfully",
            error:{error}
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    getAllAirports,
    createMul
}