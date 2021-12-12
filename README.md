# Dev List

<center>
	<a href="https://nodei.co/npm/devlist/">
		<img alt="Dev List NPM Package Statistics" src="https://nodei.co/npm/devlist.png">
	</a>
</center>

* NPM package that gets information about devlist profile and other info from the Dev List API
* Useful for websites & bots where users can input any profile id/slug
* Supports the Promise-API, you will be able to use .then, .catch, etc...

Check out our documentation [Dev List](https://docs.dlist.dev).

# Installation from [NPM](https://www.npmjs.com/package/devlist)

`npm i devlist`

# Usage

[Read Documentation](https://docs.dlist.dev)

## Examples
### (Using Await)

```js
const dlist = require('devlist');
const dlist_api = new dlist.API_Controller();

async function getUserData(){
	let user = await dlist_api.profile('300530315351425024');
	console.log(user); // profile object
	let user = await dlist_api.exists('300530315351425024');
	console.log(user); // true
	let slug = await dlist_api.slug('tariq');
	console.log(slug); // 300530315351425024
	let widget = await dlist_api.widget('300530315351425024');
	console.log(widget); // widget object
}
getUserData(); // calling the function
```

### (Using .then function)

```js
const dlist = require('devlist');
const dlist_api = new dlist.API_Controller();

dlist_api.profile('300530315351425024').then(user => {
	console.log(user);
})

dlist_api.exists('300530315351425024').then(exists => {
	console.log(exists);
})

dlist_api.slug('tariq').then(slug => {
	console.log(slug);
})

dlist_api.widget('300530315351425024').then(widget => {
	console.log(widget);
})
```

### (Validation)

```js
const dlist = require('devlist');
const dlist_api = new dlist.API_Controller();

dlist_api.profile('300530315351425024').then(user => {
	if(user){
		console.log(user); // user found
	}else{
		console.log("User not found");
	}
})

dlist_api.exists('300530315351425024').then(exists => {
	if(exists){
		console.log("Profile exists");
	}else{
		console.log("Profile does not exists");
	}
})

dlist_api.slug('tariq').then(slug => {
	if(slug){
		console.log("slug is taken by: " + slug);
	}else{
		console.log("slug is available")
	}
})

dlist_api.widget('300530315351425024').then(widget => {
	if(widget){
		console.log(widget);
		// {"buffer":BUFFER,"link":"https://dlist.dev/api/profile/300530315351425024/widget.png"}
	}else{
		console.log("Profile was not found");
	}
})
```

## Contributing

© Dev List, 2021 | TARIQ (contact@itariq.dev)