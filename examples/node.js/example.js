const dlist = require('../../index.js');
const dlist_api = new dlist.API_Controller();

async function run(){
	// get a profile
	let profile = await dlist_api.profile("300530315351425024");
	if(profile){
		console.log(profile);
	}else{
		console.log("Couldn't find the profile");
	}
	
	// check if profile exists
	let exists = await dlist_api.exists("300530315351425024");
	console.log(exists); // boolean true
	
	// get slug user
	let slug = await dlist_api.slug("tariq");
	if(slug){
		console.log("Slug is taken by: " + slug);
	}else{
		console.log("Slug is available");
	}
	
	// get profile widget
	let widget = await dlist_api.widget("300530315351425024");
	if(widget){
		console.log(widget);
	}else{
		console.log("Profile was not found");
	}
}
run(); // call the function