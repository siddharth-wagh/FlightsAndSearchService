const {FlightService} = require('../services/index');
const flightService = new FlightService();
const {SuccessCodes} = require('../utils/error-codes');

const create = async (req,res) => {
    try {
        const data = {
        flightNumber : req.body.flightNumber,
        airplaneId:req.body.airplaneId ,
        departureAirportId:req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        price:req.body.price,
        boardingGate:req.body.boardingGate
        }
        const flight = await flightService.createFlight(data);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Flight created successfully",
            error:{}
        })
    } catch (error) {
      
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to create a flight",
            error:error
        })
    }
    
}

const getAll = async (req,res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
       
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"Flights fetched successfully",
            error:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able get the flights",
            error:error
        })
    }
    
}
const get = async (req,res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        console.log(flight,typeof flight);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Flight fetched successfully",
            error:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able get the flight",
            error:error
        })
    }
    
}
const update = async (req,res) => {
    try {
        console.log(req.params.id,req.body);
        const response = await flightService.updateFlight(req.params.id,req.body);
        
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:"Flight updated successfully",
            error:{}
        })
    } catch (error) {
        
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to update the flight",
            error:error
        })
    }
    
}


module.exports = {
    create,
    getAll,
    get,
    update
}