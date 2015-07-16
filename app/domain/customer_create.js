var co       = require('co'),
    Customer = require('../models/customer'),
    stripe   = require('../../utils/stripe');

var customerCreate = function(properties) {
  this.properties = properties;
};

customerCreate.prototype.run = function() {
  return co.call(this, function *(){
    var r = yield [
      this.dbCreate(),
      this.stripeCreate()
    ]

    return r[0];
  }).catch(function(err) {
    console.error(err.stack);
  });
};

customerCreate.prototype.dbCreate = function() {
  return new Customer(this.properties).save();
};

customerCreate.prototype.stripeCreate = function() {
  return function (done) {
    stripe.customers.create(this.properties, done);
  }
};

module.exports = customerCreate;
