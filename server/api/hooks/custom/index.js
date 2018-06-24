/**
 * custom hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineCustomHook(sails) {

    return {

        /**
         * Runs when a Sails app loads/lifts.
         *
         * @param {Function} done
         */
        initialize: async function (done) {

            sails.log.info('Initializing hook... (`api/hooks/custom`)');

            // ... Any other app-specific setup code that needs to run on lift,
            // even in production, goes here ...

            return done();

        },


        routes: {

            /**
             * Runs before every matching route.
             *
             * @param {Ref} req
             * @param {Ref} res
             * @param {Function} next
             */
            before: {
                '/*': {
                    skipAssets: true,
                    fn: async function (req, res, next) {

                        // If our "lastSeenAt" attribute for this user is at least a few seconds old, then set it
                        // to the current timestamp.
                        //
                        // (Note: As an optimization, this is run behind the scenes to avoid adding needless latency.)
                      /*  const MS_TO_BUFFER = 60 * 1000;
                        const now = Date.now();
                        if (loggedInUser.lastSeenAt < now - MS_TO_BUFFER) {
                            User.update({id: loggedInUser.id})
                                .set({lastSeenAt: now})
                                .exec((err) => {
                                    if (err) {
                                        sails.log.error('Background task failed: Could not update user (`' + loggedInUser.id + '`) with a new `lastSeenAt` timestamp.  Error details: ' + err.stack);
                                        return;
                                    }//•
                                    sails.log.verbose('Updated the `lastSeenAt` timestamp for user `' + loggedInUser.id + '`.');
                                    // Nothing else to do here.
                                });//_∏_  (Meanwhile...)
                        }//ﬁ*/

                        // Prevent the browser from caching logged-in users' pages.
                        // (including w/ the Chrome back button)
                        // > • https://mixmax.com/blog/chrome-back-button-cache-no-store
                        // > • https://madhatted.com/2013/6/16/you-do-not-understand-browser-history
                        res.setHeader('Cache-Control', 'no-cache, no-store');

                        return next();
                    }
                }
            }
        }


    };

};
