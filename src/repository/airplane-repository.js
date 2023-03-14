const { Airplane}= require('../models/index');

class AirplaneRepository{

    async getAirplane(id){
        try {
            console.log("hi air");
            const airplane=await Airplane.findByPk(id);
            // console.log(airplane);
            return airplane;
        } catch (error) {
            console.log("something is wrong in airplane repo layer");
            throw {error}; 
        }
    }
}
module.exports=AirplaneRepository;