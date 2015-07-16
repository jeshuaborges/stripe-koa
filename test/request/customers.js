var app      = require('../../index'),
    assert   = require('assert'),
    request  = require('co-supertest').agent(app.listen()),
    Customer = require('../../app/models/customer');

describe('POST /customers/create', function(){
  it('creates a customer', function(done) {
    token = 'tok_16PCFgLB6cEq5WslB78M5goj';

    request
      .post('/customers/create')
      .send('stripeToken='+ token)
      .expect(302).end(function() {
        new Customer({'source': token})
          .fetch()
          .then(function(model) {
            console.info(model);
            assert(model);
            done();
          });
      });
  });
});
