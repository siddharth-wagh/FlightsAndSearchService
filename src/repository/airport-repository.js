const {Airport} = require('../models/index');
const {Op} = require('sequelize');
class AirportRepository {

    async createAirport(data) {
        try{
            const airport = await Airport.create({name:data.name,address:data.address,cityId : data.cityId});
            return airport;
        } catch(error) {
            console.log("Something wrong in airport repo layer");
            throw error;
        }
    }

    async deleteAirport(AirportId) {
        try{
             await Airport.destroy({
                where:
                {
                    id:AirportId
                }
            });
            return true;
        } catch(error) {
            console.log("Something wrong in deleteairport in repo layer");
            throw error;
        }

    }
    async getAirport(AirportId) {
        try{
            console.log(AirportId);
            const airport = await Airport.findByPk(AirportId);
            console.log(airport);
            return airport;
        } catch(error) {
            console.log("Something wrong in getairport in repo layer");
            throw error;
        }
    }
    async getAllAirports(filter) {
        try {

            if(filter.name) {
                const airports = await Airport.findAll({
                    where :{
                        name :{ [Op.startsWith] : filter.name}
                    } 
                })
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        }  catch(error) {
            console.log("Something wrong in getAllairport in repo layer");
            throw error;
        }
    }

    async updateAirport(AirportId,data) {
        try {
            const airport = await Airport.findBypk(AirportId);
            airport.name = data.name;
            airport.address = data.address;
            airport.cityId = data.cityId;

            await airport.save();
            return airport;
        } catch(error) {
            console.log("Something wrong in updateairport in repo layer");
            throw error;
        }
    }

    
}

module.exports = AirportRepository;