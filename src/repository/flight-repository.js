const {Flights} = require('../models/index');
const {Op} = require('sequelize');
class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.departureAirportId)
        {
            filter.departureAirportI = data.departureAirportI;
        }
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        let pricefilter = [];
        if(data.minPrice)
        {
            pricefilter.push({
                price:{
                    [Op.gte] : data.minPrice 
                }
            })
        }
        console.log(pricefilter);
        if(data.maxPrice)
        {
            pricefilter.push({
                price:{
                    [Op.lte] : data.maxPrice 
                }
            })
        }
        console.log(pricefilter);
        Object.assign(filter,{[Op.and] : pricefilter});
        console.log(pricefilter,filter);
        return filter;
    }

    async createFlight(data) {
        try{
            const flight = await Flights.create(data);
            
            return flight;
        } catch( error ) {
            console.log("Something wrong in repo layer in createFlight");
            throw error;
        }
        
    }

    async getFlight(FlightId) {
        try{
            const flight = await Flights.findByPk(FlightId);                      
            return flight;
        } catch( error ) {
            console.log("Something wrong in repo layer in getFlight");
            throw error;
        }
        
    }

    async getAllFlights(filter) {
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where:
                    filterObject
               
            });                      
            return flights;
        } catch( error ) {
            console.log("Something wrong in repo layer in getallFlight");
            throw error;
        }
        
    }
}

module.exports = FlightRepository;