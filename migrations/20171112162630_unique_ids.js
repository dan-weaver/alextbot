
exports.up = function(knex, Promise) {
    return knex.raw("ALTER TABLE contacts ADD UNIQUE (participant)")
};

exports.down = function(knex, Promise) {

};
