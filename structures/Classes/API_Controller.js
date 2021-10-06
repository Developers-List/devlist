"use strict";

module.exports = class API_Controller {
	async profile(id, property) {
		return require('../API_Controller/profile')(id, property || undefined)
	}
	async exists(id) {
		return require('../API_Controller/exists')(id)
	}
	async slug(slug) {
		return require('../API_Controller/slug')(slug)
	}
	async widget(id) {
		return require('../API_Controller/widget')(id)
	}
}