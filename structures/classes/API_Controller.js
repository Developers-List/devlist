"use strict";

const fetch = require('node-fetch');
const colors = require('colors');
const EventEmitter = require('events');

module.exports = class DevList extends EventEmitter{
	constructor(){ super() }
	profile = require('../methods/profile');
	exists = require('../methods/exists');
	slug = require('../methods/slug');
}