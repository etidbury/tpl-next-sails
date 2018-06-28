let isTestBootstrapped=false;

if (!isTestBootstrapped) {

    const Sails = require('sails');
    //const sailsApp = new Sails();

    let app;


    /*global before*/
    before(function (done) {




        // Increase the Mocha timeout so that Sails has enough time to lift.
        this.timeout(30000);
       
       
        require('../init')();


        Sails.lift({

            log: {
                level: 'error'
            },

        }, (err, sails)=> {

            if (err){
                return done(err);
            }

            app = sails;

            sails.config.bootstrap(done);

        });

    });

    /*global after*/
    after(function (done) {
        // Increase the Mocha timeout so that Sails has enough time to lower.
        this.timeout(30000);
        // here you can clear fixtures, etc.
        if (app)
            {app.lower(done);}
    });


    isTestBootstrapped=true;
}
