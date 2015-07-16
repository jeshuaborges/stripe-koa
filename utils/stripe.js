var config   = require('../config/default'),
		stripe 	 = require('stripe');

module.exports = stripe(config.stripe);
