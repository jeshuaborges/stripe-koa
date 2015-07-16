var app      = require('../../index'),
    assert   = require('assert'),
    request  = require('co-supertest').agent(app.listen()),
    Checkout = require('../../app/models/checkout');

describe('GET /', function () {
  it('should display success"', function *() {
    request
      .get('/')
      .expect('Welcome to koajs-starter').end();
  });
});

describe('POST /checkouts/create with checkout', function(){
  it('creates a checkout', function(done) {
    token = 'tok_16PCFgLB6cEq5WslB78M5goj';

    request
      .post('/checkouts/create')
      .send('stripeToken='+ token)
      .expect(302).end(function() {
        new Checkout({'token': token})
          .fetch()
          .then(function(model) {
            assert(model);
            done();
          });
      });
  });
});
