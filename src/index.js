const express= require("express");

const bodyparser=require("body-parser");

const {PORT} =require('./config/serverconfig');

const setupAndStartserver=  async () =>{

    const app= express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    // const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}

setupAndStartserver();