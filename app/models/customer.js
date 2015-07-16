var bookshelf = require('../../utils/bookshelf');

var Customer = bookshelf.Model.extend({
  tableName: 'customers'
})

module.exports = Customer;
