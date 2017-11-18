exports.up = function (knex, Promise) {
  return knex.schema
    .table('contacts', t => {
      t
        .string('name')
        .notNull()
        .defaultTo('Change me')
    })
    .then(() => {
      return knex('contacts').update({
        name: knex.raw('??', ['firstName']),
      })
    })
    .then(() => {
      return knex.schema.table('contacts', t => {
        t.dropColumns('firstName')
        t.dropColumns('lastName')
      })
    })
}

exports.down = function (knex, Promise) {}
