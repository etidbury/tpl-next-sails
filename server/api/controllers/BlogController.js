
module.exports.index=(req,res)=>{
    const { params, query } = req;
    sails.config.next.app.render(req, res, '/blog', { ...params, ...query })
};
