const path=require('path');

module.exports.index=(req,res)=>{


    let serverVersion;
    let clientVersion;

    try {


        serverVersion = require(path.join(process.env.WORK_DIR,'/server/package')).version;
        clientVersion = require(path.join(process.env.WORK_DIR,'/package')).version;

    }catch(err){
        sails.log.error("Failed to get client/server package versions",err);
        return res.status(404).send("Failed to get client/server package versions");
    }


    return res.json({serverVersion,clientVersion});


};
