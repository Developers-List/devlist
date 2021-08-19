// Package Info
const packageInfo = require('./package.json');
exports.name = packageInfo.name;
exports.version = packageInfo.version;
// Classes
exports.API_Controller = require('./structures/Classes/API_Controller');