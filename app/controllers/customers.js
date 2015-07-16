var Customer 			 = require('../models/customer'),
		CustomerCreate = require('../domain/customer_create'),
		stripe 	 			= require('../../utils/stripe');

module.exports = {
	new: function *(next) {
		yield this.render('customers/new.ect', {
			title: 'Create Customer'
		});

		yield next;
	},

	create: function *(next) {
		params = this.request.body;

		var customer = yield new CustomerCreate({
			plan:   'premium',
			source: params.stripeToken
		}).run();

		this.redirect('/customers/'+ customer.id);

		yield next;
	},

	show: function *(next) {
		var customer = yield new Customer({'id': this.params.id}).fetch();

		yield this.render('customers/show.ect', {
			title: 	  'Success!',
			customer: customer.attributes
		});

		yield next;
	}
};
