let isTestBootstrapped = false;

if (!isTestBootstrapped) {

    const Sails = require('sails');
    //const sailsApp = new Sails();

    let app;


    /*global before*/
    before(function (done) {




        // Increase the Mocha timeout so that Sails has enough time to lift.
        this.timeout(30000);

        require('../init')((err, sails) => {
            if (err) {
                return done(err);
            }

            app = sails;

            sails.config.bootstrap(done);
        }, {
                log: {
                    level: 'error'
                }
            }
        );

    });

    /*global after*/
    after(function (done) {
        // Increase the Mocha timeout so that Sails has enough time to lower.
        this.timeout(30000);
        if (app) { app.lower(done); }
    });


    isTestBootstrapped = true;
}
