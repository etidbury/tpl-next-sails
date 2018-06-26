
module.exports.next = {
    // Sails integration options
    api: {
        // Prefix for all Sails API routes
       // prefix: require('./blueprints').prefix
    },

    // Next.js instance options. Passed to `next()`.
    server: {
        // Next.js root directory
        dir: '../',
        // Dev mode. Is overridden by `process.env.NODE_ENV !== 'production'`
        dev: true,
        // Hide error messages
        quiet: false,
        // Equivalent to a `next.config.js` file
        conf: require('../../next.config')
    }
}
