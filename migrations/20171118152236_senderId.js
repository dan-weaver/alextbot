exports.up = function (knex, Promise) {
  return knex.schema.table('contacts', t => {
    t.uuid('senderId').notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.table('contacts', t => {
    t.dropColumns('senderId')
  })
}
