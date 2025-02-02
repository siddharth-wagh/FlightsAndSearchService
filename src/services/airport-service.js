const {AirportRepository} = require('../repository/index');
const airportRepository = new AirportRepository();
class AirportService {

    constructor()
    {
        this.airportRepository = airportRepository;
    }

    async createAirport(data) {
        try{
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch(error) {
            console.log("Something wrong in service layer in createAirport");
            throw error;
        }
    }

    async deleteAirport(airportId) {
        try{
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch(error) {
            console.log("Something wrong in service layer in deleteairport");
            throw error;
        }
    }

    async getAirport(airportId) {
        try{
            
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch(error) {
            console.log("Something wrong in service layer in getairport");
            throw error;
        }
    }

    async getAllAirports(filter) {
        try{
            const airports = await this.airportRepository.getAllAirports(filter);
            return airports;
        } catch(error) {
            console.log("Something wrong in service layer in getallairport");
            throw error;
        }
    }

    async updateAirport(airportId,data) {
        try{
            const airport = await this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch(error) {
            console.log("Something wrong in service layer in getairport");
            throw error;
        }
    }
}

module.exports =  AirportService;