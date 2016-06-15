
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cebus', function(table){
    table.increments();
    table.text('species');
    table.text('image_url');
    table.text('description')
    table.integer('cuteness_rating')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('cebus');
};
