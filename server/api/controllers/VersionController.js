module.exports.index=(req,res)=>{


    let serverVersion;
    let clientVersion;

    try {


        serverVersion = require('../../package').version;
        clientVersion = require('../../../package').version;

    }catch(err){
        sails.log.error("Failed to get client/server package versions",err);

    }


    return res.json({serverVersion,clientVersion});


};
