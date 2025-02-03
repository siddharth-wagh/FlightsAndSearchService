const {Flights} = require('../models/index');

class FlightRepository {

    async createFlight(data) {
        try{
            const flight = Flights.create(data);
            
            return flight;
        } catch( error ) {
            console.log("Something wrong in repo layer in createFlight");
            throw error;
        }
        
    }
}

module.exports = FlightRepository;