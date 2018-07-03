
module.exports=()=>{

    const path=require('path');

    if (!process.env.WORK_DIR||!process.env.WORK_DIR.length){
        process.env.WORK_DIR=path.resolve(__dirname,"../");
        console.log(`Set default working directory: ${process.env.WORK_DIR}`)
    }

    //const moduleAlias = require('module-alias')

    //moduleAlias.addAlias('react', 'preact-compat')
    //moduleAlias.addAlias('react-dom', 'preact-compat')

    require('dotenv').config({path:path.join(process.env.WORK_DIR,".env")});

    //stop sails from overriding baked in env variables for ports in config/*
    if (process.env.NODE_ENV!=="production"){
        delete process.env.PORT;
    }else{
        //ensure fixtures are not used in production

        if (process.env.FIXTURES&&process.env.FIXTURES.length)
            console.warn("process.env.FIXTURES is set in production. Ignoring!");

        delete process.env.FIXTURES;
    }
        
        
    
    ["MYSQL_CONNECTION_URL"].forEach((envName)=>{
        if (!process.env[envName]||!process.env[envName].length)
            throw new Error(`Required environment variable is not set: ${envName}`)
    });

}
