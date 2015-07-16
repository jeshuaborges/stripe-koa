var assert = require('assert'),
		stripe = require('../../utils/stripe');

require('co-mocha');

describe('stripe setup', function() {
	// e2e test
	it('creates a connected stripe account', function(done){
		stripe.customers.list({limit: 1}, function(err, customers) {
		    assert.ifError(err);
				done();
		  }
		);
	});
});
