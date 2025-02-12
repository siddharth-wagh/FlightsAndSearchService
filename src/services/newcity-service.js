const NewCityRepository = require('../repository/newcity-repository');

const CrudService = require('./crud-service');

class NewCityService extends CrudService {
    constructor() {
        const newcityrepo = new NewCityRepository();
        super(newcityrepo);
    }

    async createMultipleCities(data) {
        try {
            const city = await this.newcityrepo.createMultipleCities(data);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }

    async getAllCities(filter) {
        try {

            const cities = await this.newcityrepo.getAllCities({name:filter.name});
            return cities;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    } 

    async getAllAirports(cityId) {
        try {
            const city = await this.newcityrepo.getAllAirports(cityId);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }   
}

module.exports = NewCityService;