var _    = require('lodash'),
    co   = require('co'),
    knex = require('./knex');

var tables = ['customers', 'checkouts'];

module.exports = function *() {
  co(function *() {
    _.map(tables, function(table) {
      knex(table).del();
    });
  });
}
