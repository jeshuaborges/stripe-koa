var assert          = require('assert'),
    CustomerCreate  = require('../../app/domain/customer_create'),
    Customer        = require('../../app/models/customer');
    // knex            = require('../../utils/knex');

require('co-mocha');

describe('customerCreate', function() {
  var command;

  beforeEach(function() {
    // knex('customers').del();

    command = new CustomerCreate({
      email:  'foo@bar.com',
      plan:   'premium',
      source: 'token'
    });
  });

  it('creates a customer db record', function(done) {
    command.dbCreate().then(function() {
      new Customer({source: 'token'}).fetch().then(function(customer) {
        assert(customer);
        done();
      });
    });
  });

  it.only('returns a customer object', function(done) {
    command.run().then(function(results) {
      assert(results.attributes.email == 'foo@bar.com');
      done();
    })
  });
});
