const {Airplane} = require('../models/index');

class AirplaneRepository {

    async getAirplane(AirplaneId) {
        try{
          
            const airplane = await Airplane.findByPk(AirplaneId);
           
            return airplane;
        } catch(error) {
            console.log("something wrong in getairplanes in repo layer");
            throw error;
        }
    }
}

module.exports = AirplaneRepository;