var ApiBuilder = require('claudia-api-builder');
const qs = require('querystring');
const rp = require('minimal-request-promise');

var api = new ApiBuilder();

api.get('/hello', function () {
  return 'hello world';
});


//module.exports = function oauth2() {}
api.get('/oauth', function request() {
    return rp.post('https://quizlet.com/authorize', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.encode({
            //scope: "read", //says seperate with spaces
            client_id: process.env.QUIZLET_SECRET_KEY,
            //response_type: "code",
            //state: "fido",
            redirect_uri: "https://quizlet.com" //could change if needed.
        })
    })/*.then(function () {
        process.env.REDIRECT;
    })*/;
}, {
    success: 302
});








module.exports = api;
