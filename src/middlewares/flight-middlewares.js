const ValidateCreateFlight = (req,res,next) => {
    if(
        
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price ||
        !req.body.boardingGate
    ) {
        console.log(req.body);
        return res.status(400).json({
            data: {},
            status: false,
            message: "Invalid request body for create function",
            error: "Missing mandotory properties to create a flight"
        })
        
       
    }
    next();
}

module.exports = {
    ValidateCreateFlight
}