// Package Info
const packageInfo = require('./package.json');
exports.name = packageInfo.name;
exports.version = packageInfo.version;
// Classes
exports.API_Controller = require('./structures/classes/API_Controller.js');