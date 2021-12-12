"use strict";

const EventEmitter = require('events');
require('colors');

module.exports = class API_Controller extends EventEmitter{
	constructor(){ super() }
	profile = require('../API_Controller/profile');
	exists = require('../API_Controller/exists');
	slug = require('../API_Controller/slug');
	widget = require('../API_Controller/widget');
}