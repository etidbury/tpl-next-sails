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
