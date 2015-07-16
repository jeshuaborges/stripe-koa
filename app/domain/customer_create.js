var co       = require('co'),
    Customer = require('../models/customer'),
    stripe   = require('../../utils/stripe');

var customerCreate = function(properties) {
  this.proprties = properties;
};

customerCreate.prototype.run = function() {
  return co(function *(){
    [
      this.dbCreate(),
      this.stripeCreate(),
    ]
  });
};

customerCreate.prototype.dbCreate = function() {
  new Customer(this.properties).save();
};

customerCreate.prototype.stripeCreate = function() {
  return function (done) {
    stripe.customers.create(this.properties, done);
  }
};

module.exports = customerCreate;
