exports.up = function (knex, Promise) {
  return knex.schema.table('contacts', (t) => {
    t.uuid('conversation').notNull()
    t.uuid('participant').notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.table('contacts', (t) => {
    t.dropColumns('conversation')
    t.dropColumns('participant')
  })
}
