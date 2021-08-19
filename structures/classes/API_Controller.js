"use strict";

const fetch = require('node-fetch');
const colors = require('colors');
const EventEmitter = require('events');

module.exports = class API_Controller extends EventEmitter{
	constructor(){ super() }
	profile = require('../API_Controller/profile');
	exists = require('../API_Controller/exists');
	slug = require('../API_Controller/slug');
	widget = require('../API_Controller/widget');
}