
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(t) {
    t.increments('id').unsigned().primary()
    t.dateTime('createdAt').notNull()
    t.dateTime('updatedAt').nullable()
    t.string('firstName').nullable()
    t.string('lastName').nullable()
    t.text('lastInteraction').nullable()
    t.string('email').nullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts')
};
