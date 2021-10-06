const fetch = require('node-fetch');
require('colors');
module.exports = async function (arg) {
	if (!arg || isNaN(arg)) throw new TypeError("widget method first argument must be a user ID");
	let exists = await require('../API_Controller/exists')(arg);
	if (!exists) return false;
	let link = `https://devlist.dev/api/profile/${encodeURIComponent(arg)}/widget.png`;
	let widget = await fetch(link).then(res => res.buffer());
	return { "link": link, "buffer": widget };
}