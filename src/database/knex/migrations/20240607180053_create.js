exports.up = async function (knex) {
  await knex.schema.createTable("transactions", (table) => {
    table.increments("id").primary();
    table.string("descrition").notNullable();
    table.string("type").notNullable();
    table.string("category").notNullable();
    table.integer("valor").notNullable();
    table.string("userId").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("transactions");
};
