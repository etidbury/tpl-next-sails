
module.exports=()=>{

    const path=require('path');

console.log("Initiated.");
    if (!process.env.WORK_DIR||!process.env.WORK_DIR.length){
        process.env.WORK_DIR=path.resolve("../");
        console.log(`Set default working directory: ${process.env.WORK_DIR}`)
    }
        


    require('dotenv').config({path:path.join(process.env.WORK_DIR,".env")});

    //stop sails from overriding baked in env variables for ports in config/*
    if (process.env.NODE_ENV!=="production")
        delete process.env.PORT;
    
    ["MYSQL_CONNECTION_URL"].forEach((envName)=>{
        if (!process.env[envName]||!process.env[envName].length)
            throw new Error(`Required environment variable is not set: ${envName}`)
    });

}
