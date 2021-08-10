const fetch = require('node-fetch');
const colors = require('colors');

module.exports = async function(arg){
	if(!arg) throw Error ("Devlist: slug() function first argument must be a slug or vanity url".brightYellow);
	arg = arg.split("www.devlist.vip/").join("")
	arg = arg.split("devlist.vip/").join("")
	arg = arg.split("https://").join("")
	arg = arg.split("http://").join("")
	let data = await fetch("https://devlist.dev/api/slug/" + arg).then(res => res.json());
	return data.user;
}