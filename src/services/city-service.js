const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }

    async createMultipleCities(data) {
        try {
            const city = await this.cityRepository.createMultipleCities(data);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }
    async deleteCity(cityId) {
        try {
            const response = this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }

    async updateCity(cityId,data) {
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer in servies");
            throw error;
        }
    }

    
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }   

    async getAllCities(filter) {
        try {

            const cities = await this.cityRepository.getAllCities({name:filter.name});
            return cities;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    } 

    async getAllAirports(cityId) {
        try {
            const city = await this.cityRepository.getAllAirports(cityId);
            return city;
        } catch (error) {
            console.log("Something is wrong in repository layer");
            throw error;
        }
    }   
}

module.exports = CityService;