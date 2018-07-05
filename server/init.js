
module.exports = (onSailsLift,sailsConfig) => {

    const path = require('path');

    if (!process.env.WORK_DIR || !process.env.WORK_DIR.length) {
        process.env.WORK_DIR = path.resolve(__dirname, "../");
        console.log(`Set default working directory: ${process.env.WORK_DIR}`)
    }

    //const moduleAlias = require('module-alias')

    //moduleAlias.addAlias('react', 'preact-compat')
    //moduleAlias.addAlias('react-dom', 'preact-compat')

    require('dotenv').config({ path: path.join(process.env.WORK_DIR, ".env") });

    //stop sails from overriding baked in env variables for ports in config/*
    if (process.env.NODE_ENV !== "production") {
        delete process.env.PORT;
    } else {
        //ensure fixtures are not used in production

        if (process.env.FIXTURES && process.env.FIXTURES.length)
            console.warn("process.env.FIXTURES is set in production. Ignoring!");

        delete process.env.FIXTURES;
    }



    ["MYSQL_CONNECTION_URL","WORK_DIR"].forEach((envName) => {
        if (!process.env[envName] || !process.env[envName].length)
            throw new Error(`Required environment variable is not set: ${envName}`)
    });


    // Start server
    const isSailsNextHookDisabled = (process.env.DISABLE_SAILS_NEXT_HOOK && process.env.DISABLE_SAILS_NEXT_HOOK.length);
    if (isSailsNextHookDisabled)
        console.warn("Sails Next.js hook has been disabled!");


    let sails;
    let rc;
    try {
        sails = require("sails");
        rc = require("sails/accessible/rc");
    } catch (err) {
        console.error("Encountered an error when attempting to require('sails'):");
        console.error(err.stack);
        console.error("--");
        console.error(
            "To run an app using `node index.js`, you need to have Sails installed"
        );
        console.error(
            "locally (`./node_modules/sails`).  To do that, just make sure you're"
        );
        console.error("in the same directory as your app and run `npm install`.");
        console.error();
        console.error(
            "If Sails is installed globally (i.e. `npm install -g sails`) you can"
        );
        console.error(
            "also run this app with `sails lift`.  Running with `sails lift` will"
        );
        console.error(
            "not run this file (`index.js`), but it will do exactly the same thing."
        );
        console.error(
            "(It even uses your app directory's local Sails install, if possible.)"
        );
        return;
    } //-•
    process.chdir(__dirname);
    sails.lift(
        Object.assign(rc("sails"), {
            hooks: {
                next: false
            }
        },sailsConfig||{}), onSailsLift
    );

}
