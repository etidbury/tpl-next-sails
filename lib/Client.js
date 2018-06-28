const axios = require('axios');
//const qs = require('qs');

//axios.defaults.timeout = 60 * 1000;
const client = axios.create({
    timeout: 60 * 1000,
    baseURL: process.env.API_BASE_URL,
    /*validateStatus: (status) => {
        //todo: double-check logic
        return (status >= 200 && status < 300 || status === 401 || status === 403);
    }*/
    /* other custom settings */
});

let _lastError;


//let _timeoutSpotifyReqs;

/*client.interceptors.request.use(async (config) => {

    const url=config.url;

    if (url.indexOf("api.spotify.com")>-1) {
        console.log("Client.js[26]:",url);//fordebug: print debug
        const wait = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(config);
            }, 10000);
        });

        config = await wait;

    }

    return config;

});*/


const SPOTIFY_REQUEST_DELAY = 300;//todo: specified in both MiscUtil.test.js and Client.js, change to global config


client.interceptors.response.use(async (response) => {

    const url = response.config.url;

    if (url.indexOf("api.spotify.com") > -1) {

        const wait = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(response);
            }, SPOTIFY_REQUEST_DELAY);
        });

        response = await wait;

    }

    return response;

});



client.interceptors.response.use((response) => {
    return response;
}, function (error) {

    try {


        try {

            const errorId = error.response.status + error.config.method.toUpperCase() + error.config.url + error.response.data;

            if (errorId !== _lastError) {
                console.error(error.response.status, error.config.method.toUpperCase(), error.config.url, error.response.data);
                _lastError = errorId;
            }
        } catch (e) {
            const errorId = error.config.status + error.config.method.toUpperCase() + error.config.url;

            if (errorId !== _lastError) {
                console.error(error.config.status, error.config.method.toUpperCase(), error.config.url);
                _lastError = errorId;
            }
        }


    } catch (e) {
        console.error(error && error.response || error);
    }

    //return Promise.reject(error);
    return error;

});


export default client;
