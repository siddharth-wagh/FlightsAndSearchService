const {City} = require('../models/index.js');
const {Op} = require('sequelize');
const {Airport} = require('../models/index.js');
class CityRepository{
    
    async createCity({ name }) {
        try{
            const city = await City.create({ name });
            return city;
        } catch(error) {
            console.log("Something is wrong in the repository layer in create");
            throw error ;
           
        }
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
    
    async deleteCity(cityId) {
        try{
            await City.destroy({
                where : {
                    id:cityId
                }
            })
            return true;
        } catch(error) {
            console.log("Something is wrong in the repository layer in delete");
           
            throw error;
        }
    }

    async updateCity(cityId,data) {
        try {
            //The below appproach also works but doesnt return updated object 
            //If you are using pgsql then you can use returning true,else not.

            // const city = await City.update(
            //     data,{
            //         where :{
            //             id : cityId
            //         }
            //     }
            // )
            //returning :true
            //plain:true

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch(error) {
            console.log("Something is wrong in the repository layer in updatecity");
            
            throw error;
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

    async getCity(cityId) {
        try {
           
            const city = await City.findByPk(cityId);
            return city;
        } catch(error) {
            console.log("Something is wrong in the repository layer in getcity" );
            throw error ;
        }
    }

    async getAllAirports(cityId) {
        try{
            const airports = await Airport.findAll({
                where:{
                    cityId:cityId
                }
            });
            return airports;
        } catch (error) {
            console.log("Something is wrong in the repository layer in getallairports" );
            throw error;
        }
    }
}

module.exports = CityRepository;