const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error:"Arrival time should be greater than the departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane);
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
           
            return flight;
        } catch (error) {
            console.log("Something wrong in createflight in service layer");
            throw error;
        }
    }

    async getAllFlights(data) {
        try {
            const flights = this.flightRepository.getAllFlights(data);
            
            
            return flights;
        } catch (error) {
            console.log("Something wrong in getallflight in service layer");
            throw error;
        }
    }

    async getFlight(FlightId) {
        try {
            const flight = await this.flightRepository.getFlight(FlightId);
            return flight;
        } catch (error) {
            console.log("Something wrong in getallflight in service layer");
            throw error;
        }
    }

    async updateFlight(FlightId,data) {
        try {
            const response = await this.flightRepository.updateFlights(FlightId,data);
            return response;
        } catch (error) {
            console.log("Something wrong in updateflight in service layer");
            throw error;
        }
    }
}

module.exports = FlightService;
/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * boardingGate
 * totalSeats->from airplane
 * 
 *  
 * 
 * 
 */
