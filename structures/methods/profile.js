const fetch = require('node-fetch');
const colors = require('colors');

module.exports = async function(arg){
	if(!arg) throw Error ("Devlist: profile() function first argument must be a user ID".brightYellow);
	let url = "https://devlist.dev/api/profile/" + arg;
	let data = await fetch(url).then(res => res.json());
	return data.message ? false : data;
}