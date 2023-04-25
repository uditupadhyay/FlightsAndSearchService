const {Flight} =require('../models/index');
const {Op}=require('sequelize');

class FlightRepository{

    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        // if(data.minPrice && data.maxprice){
        //     Object.assign(filter,{
        //         [Op.and]:[
        //             {price:{[Op.lte]:data.maxprice}},
        //             {price:{[Op.gte]:data.minPrice}}
        //         ]
        //     })
        // }
        let priceFilter=[];
        if(data.minPrice){
            // Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxprice){
            // Object.assign(filter,{price:{[Op.lte]:data.maxprice}});
            priceFilter.push({price:{[Op.lte]:data.maxprice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }

    async createFlight(data){
        try {
            const flight= await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("something is wrong in flight repo layer");
            throw {error}; 
        }
    }

    async getFlight(flightId){
        try {
            const flight= await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something is wrong in flight repo layer");
            throw {error}; 
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject=this.#createFilter(filter);
            const flight= await Flight.findAll({
                where:filterObject
            });
            return flight;
        } catch (error) {
            console.log("something is wrong in flight repo layer");
            throw {error}; 
        }
    }

    async updateFlights(flightId,data){
        try{
            await Flight.update(data,{
                where:{
                    id:flightId
                }
            });
            return true;
        } catch(error){
            console.log("something is wrong in flight repo layer");
            throw {error};
        }
    }

}

module.exports=FlightRepository;