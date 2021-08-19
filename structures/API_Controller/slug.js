const fetch = require('node-fetch');
const colors = require('colors');

module.exports = async function(arg){
	if(!arg) throw new TypeError("slug method first argument must be a slug or vanity url");
	arg = arg.split("www.devlist.vip/").join("").split("devlist.vip/").join("").split("https://").join("").split("http://").join("")
	let data = await fetch("https://devlist.dev/api/slug/" + arg).then(res => res.json());
	return data.user;
}