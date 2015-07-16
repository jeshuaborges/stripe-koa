var config = require('../knexfile');

var env  = process.env.NODE_ENV || 'development';
var knex = knex || require('knex')(config[env]);

module.exports = knex;
