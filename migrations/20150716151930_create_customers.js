var tableName = 'customers';

exports.up = function(knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments();
    table.string('email');
    table.string('plan');
    table.string('source');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(tableName);
};
