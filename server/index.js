"use strict";

/**
 * index.js
 *
 * Use `index.js` to run your app without `sails lift`.
 * To start the server, run: `node index.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful,
 * such as when you deploy to a server, or a PaaS like Heroku.
 *
 * For example:
 *   => `node index.js`
 *   => `npm start`
 *   => `forever start index.js`
 *   => `node debug index.js`
 *
 * The same command-line arguments and env vars are supported, e.g.:
 * `NODE_ENV=production node index.js --port=80 --verbose`
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/index.js
 */

// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);

require("./init")();

// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
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

// Start server
//sails.lift();
const isSailsNextHookDisabled=(process.env.DISABLE_SAILS_NEXT_HOOK&&process.env.DISABLE_SAILS_NEXT_HOOK.length);
if (isSailsNextHookDisabled)
  console.warn("Sails Next.js hook has been disabled!");

sails.lift(
  Object.assign(rc("sails"), {
    hooks: {
      next: !isSailsNextHookDisabled
    }
  })
);
