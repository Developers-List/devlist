const devlist = require('../../index.js');
const devlist_api = new devlist.API_Controller();

async function run(){
	// get a profile
	let profile = await devlist_api.profile("300530315351425024");
	if(profile){
		console.log(profile);
	}else{
		console.log("Couldn't find the profile");
	}
	
	// get slug user
	let slug = await devlist_api.slug("tariq");
	if(slug){
		console.log("Slug is taken by: " + slug);
	}else{
		console.log("Slug is available");
	}
}
run(); // call the function