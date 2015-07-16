var Checkout = require('../../app/models/checkout'),
		stripe 	 = require('stripe')('sk_test_ClHBC1uVtkE2KYomRd2DUnwH');

module.exports = {
	new: function *(next) {
		yield this.render('new.ect', {
 			title: 	  'new'
 		});

 		yield next;
	},

	create: function *(next) {
		params = this.request.body;

		var checkout = yield new Checkout({token: params.stripeToken}).save();

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
