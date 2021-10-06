const fetch = require('node-fetch');
require('colors');

module.exports = async function(arg) {
	if(!arg || isNaN(arg)) throw new TypeError("exists method first argument must be a user ID");
	let data = await fetch(`https://devlist.dev/api/profile/${encodeURIComponent(arg)}/exists`).then(res => res.json());
	return data.message ? false : data;
}