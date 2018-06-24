/**
 *
 * @link https://github.com/ghaiklor/sails-hook-cron
 *
 */
// ['seconds', 'minutes', 'hours', 'dayOfMonth', 'month', 'dayOfWeek']

module.exports.cron =
  process.env.NODE_ENV === "testing"
    ? {}
    : {
        basicCRON: {
          schedule: "* 15 * * * *", //every 15 minutes
          //schedule: '5 * * * * *',//every 20 seconds
          onTick: function() {
            return false;
          },
          onComplete: function() {
            sails.log.debug("Complete CRON onComplete");
          },
          runOnInit: process.env.NODE_ENV === "production" // Will fire your onTick function as soon as the requisit initialization has happened.
        },

        postgresImport: {
          schedule: "* * 3 * * *",
          onTick: function() {
            PostgresImport.import();
          }
        }
      };
