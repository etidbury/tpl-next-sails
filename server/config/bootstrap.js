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
const fixtures=['User'];
module.exports.fixtures = fixtures;

module.exports.bootstrap = async function (done) {

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

    if (process.env.FIXTURES) {
       /*
        const Barrels = require('barrels');

        // Load fixtures
        const barrels = new Barrels();

        // Populate the DB
        barrels.populate(fixtures, (err) => {
            return done(err);
        });*/


       sails.log.debug("Loading fixtures manually...");

       Promise.all(fixtures.map((fixture)=>{
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
