const express= require("express");

const bodyparser=require("body-parser");

const {PORT} =require('./config/serverconfig');

const ApiRoutes=require('./routes/index');
const db = require('./models/index');
// const {Airplane,City} = require('./models/index');

const setupAndStartserver=  async () =>{

    const app= express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    // const PORT=3000;
    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }

        // const city = await City.findOne({
        //     where :{
        //         id:9
        //     }
        // });
        // const airport= city.getAirport();
        // console.log(city,airport);

    });
}

setupAndStartserver();