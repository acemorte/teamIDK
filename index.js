var ApiBuilder = require('claudia-api-builder');
const qs = require('querystring');
//const rp = require('minimal-request-promise');

var api = ApiBuilder();

api.get('/hello', function () {
        return 'Hello!'
});


//module.exports = function oauth2() {
    /*
    api.get('/oauth', function request() {
        return rp.post('https://slack.com/api/oauth.access', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.encode({
                client_id: request.env.slackClientId,
                client_secret: request.env.slackClientSecret,
                code: request.queryString.code,
                redirect_uri: request.env.slackRedirectUrl
            })
        }).then(function () {
            request.env.slackHomePageUrl
        });
    }, {
        success: 302
    });
};*/

//module.exports = app;
module.exports = api;

/*
module.exports = {
	key: function (){},
    key2: function (){}
};
*/