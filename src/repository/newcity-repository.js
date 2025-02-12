const CrudRepository = require('./crud-repository');
const {City} = require('../models/index');

class NewCityRepository extends CrudRepository {

    constructor(){

        super(City);
    }

    async createMultipleCities(data) {
        try{
            const city = await City.bulkCreate(data);
            return city;
        } catch(error) {
            console.log("Something is wrong in the repository layer in create");
            throw error ;
           
        }
    } 
     async getAllCities(filter) { //it can work for no filter aswell
            try{
                if(filter.name){
                    const cities = await City.findAll({
                        where : {
                                name:{[Op.startsWith] : filter.name}
                        }
                    })
                    return cities;
                }
                const cities = await City.findAll();
                return cities;
            } catch(error) {
                console.log("Something is wrong in the repository layer in get all cities");
                
                throw error;
            }
        }

        async getAllAirports(cityId) {
            try{
    
                
                const city = await City.findByPk(cityId);
                const airports = await city.getAirports();
                return airports;
            } catch (error) {
                console.log("Something is wrong in the repository layer in getallairports" );
                throw error;
            }
        }
}
module.exports = NewCityRepository;