var assert   = require('assert'),
    Checkout = require('../../app/models/checkout'),
    knex     = require('../../utils/knex');

require('co-mocha');

describe('Checkout', function() {
  beforeEach(function *() {
    knex(new Checkout().tableName).del().then(function *() {
      yield;
    });
  });

  it('creates an instance of user', function *() {
    var user = new Checkout();
    assert.equal(typeof user, 'object');
  });

  it('sets its properties', function *() {
    var token = 'foobar'
    checkout = new Checkout({token: token});
    assert.equal(checkout.attributes.token, token);
  });

  it('sets id when saved', function *() {
    var token = 'foobar'
    checkout = new Checkout({token: token})
    checkout.save().then(function*(obj) {
      assert(checkout.id);
      yield;
    });
  });
});
