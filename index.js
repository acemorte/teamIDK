/**
Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

'use strict';

const AlexaSkill = require('./AlexaSkill');
const Alexa = require('alexa-sdk');
//const apiBuilder = require('claudia-api-builder');
//var api = apiBuilder();

var cardsets;

var correctAnswer;

var counter = 0;

var whichCard, whichAnswerCorrect;

exports.handler = function (event, context, callback) {
	var alexa = Alexa.handler(event, context);
};

var handlers = {
	'Hello Mother Fucker': function () {
		this.emit(':tell', 'Hello Mother Fucker!');
this.emit(':ask', 'What the fuck do you want?');}}

var handlers = {
	' I need your help': function () {
		this.emit(':ask', 'What the fuck do you need now?');
	}
};

var handlers = {
	'help me study': function () {
		this.emit(':tell', 'I rather help the wall itll learn faster ');
		this.emit(':ask ', ' the abc again?');
	}
}

var states = {
	STUDYMODE: '_STUDYMODE',
	STARTMODE: '_STARTMODE',
};

var newSessionHandlers = {
	'NewSession': function () {
		if (Object.keys(this.attributes).length === 0) {
			this.attibutes['endedSessionCount'] = 0;
			this.attributes['timesStudiedToday'] = 0;
		}
		l: this.handler.state = states.STARTMODE;
		m: this.emit(':ask', 'What are you studying today? You have studied ', this.attributes(
				'timesStudiedToday').toString(), 'times today. You should study more',
			'Yes or no.');
	}
};

var STUDYMODEhandlers = Alexa.CreateStateHandler(states.STUDYMODE, {
		'NewSession': function () {
			n: this.handler.state = '';
			o: this.emitWithState('Newsession');
		},
		'STUDYMODEIntent': function (response) {
			var speechOutput = response;
			var shouldEndSession = true;
			callback(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput,
					repromptText, shouldEndSession));
			function response(response) {
				var http = require('http');
				var options = {
					host: 'api.quizlet.com',
					port: 80,
					path: '/',
					agent: false
				}
			};

			var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

			var handlers = {
				'saysomeshit': function () {
					p: this.emit(':tell', 'fuuuuuck!');
				}
			};

			var STUDYMODE = function () {
				AlexaSkill.call(this, APP_ID);
			};
			exports.handler = function (event, context, callback) {
				var alexa = Alexa.handler(event, context);
				alexa.registerHandlers(handlers);
				alexa.execute();
			}
		}
});

//module.exports = api;