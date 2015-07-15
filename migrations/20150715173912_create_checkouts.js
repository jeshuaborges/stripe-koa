var tableName = 'checkouts';

exports.up = function(knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments();
    table.string('token');
    table.string('token_type');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(tableName);
};
