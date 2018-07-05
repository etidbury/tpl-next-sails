/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = function (done) {

    // By convention, this is a good place to set up fake data during development.
    //
    // For example:
    // ```
    // // Set up fake development data (or if we already have some, avast)
    // if (await User.count() > 0) {
    //   return done();
    // }
    //
    // await User.createEach([
    //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
    //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
    //   // etc.
    // ]);
    // ```

    // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
    // (otherwise your server will never lift, since it's waiting on the bootstrap)


    if (process.env.FIXTURES&&process.env.FIXTURES.length) {
       /*
        const Barrels = require('barrels');

        // Load fixtures
        const barrels = new Barrels();

        // Populate the DB
        barrels.populate(fixtures, (err) => {
            return done(err);
        });*/
    
        const fixtureModelNames=process.env.FIXTURES.split(',').map((t)=>t.trim());

        if (!fixtureModelNames.length) throw new Error("Invalid fixtures specified in FIXTURES environment variable");

       sails.log.debug("Loading fixtures:",fixtureModelNames.join(', '));



       Promise.all(fixtureModelNames.map((fixture)=>{
           //const data=require('')
           const data=require(`../test/fixtures/${fixture}`);

           return sails.models[fixture.toLowerCase()].createEach(data);

       })).then(()=>{
           return done();
       }).catch((err)=>{
           return done(err);
       });

    } else {
        return done();
    }


};
