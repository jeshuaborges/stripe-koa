var Checkout = require('../../app/models/checkout'),
		stripe 	 = require('../../utils/stripe');

module.exports = {
	new: function *(next) {
		yield this.render('index.ect', {
			title: 'Render view template'
		});

		yield next;
	},

	create: function *(next) {
		params = this.request.body;

		var checkout = yield new Customer({token: params.stripeToken}).save();

		stripe.customers.createSubscription(params.stripeToken,
		  {plan: 'premium'},
		  function(err, subscription) {
		    console.warn(subscription);
		  }
		);

		this.redirect('/checkouts/'+ checkout.id);

		yield next;
	},

	show: function *(next) {
		var checkout = yield new Checkout({'id': this.params.id}).fetch();

		yield this.render('show.ect', {
			title: 	  'Success!',
			checkout: checkout
		});

		yield next;
	}
};
