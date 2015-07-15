var bookshelf = require('../../utils/bookshelf');

var Checkout = bookshelf.Model.extend({
  tableName: 'checkouts'
})

module.exports = Checkout;
