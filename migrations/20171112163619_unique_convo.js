
exports.up = function(knex, Promise) {
    return knex.raw("ALTER TABLE contacts ADD UNIQUE (conversation)")
};

exports.down = function(knex, Promise) {

};
