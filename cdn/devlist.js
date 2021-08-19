class API_Controller {
	constructor(){}
	"profile" = async function(arg, property){
		if(!arg || isNaN(arg)) throw new TypeError("profile method first argument must be a user ID");
		let url = "https://devlist.dev/api/profile/" + arg;
		let data = await fetch(url).then(res => res.json());
		return data.message ? false : (property ? data[property] : data);
	}
	"exists" = async function(arg){
		if(!arg || isNaN(arg)) throw new TypeError("exists method first argument must be a user ID");
		let data = await fetch(`https://devlist.dev/api/profile/${arg}/exists`).then(res => res.json());
		return data.message ? false : data;
	}
	"slug" = async function(arg){
		if(!arg) throw new TypeError("slug method first argument must be a slug or vanity url");
		arg = arg.split("www.devlist.vip/").join("").split("devlist.vip/").join("").split("https://").join("").split("http://").join("")
		let data = await fetch("https://devlist.dev/api/slug/" + arg).then(res => res.json());
		return data.user;
	}
	"widget" = async function(arg){
		if(!arg || isNaN(arg)) throw new TypeError("widget method first argument must be a user ID");
		let exists = await this.exists(arg);
		if(!exists) return false;
		let link = `https://devlist.dev/api/profile/${arg}/widget.png`;
		let widget = await fetch(link).then(res => res.buffer());
		return {"link":link,"buffer":widget};
	}
}

const devlist = {
	API_Controller
}