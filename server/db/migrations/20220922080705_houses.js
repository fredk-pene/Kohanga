exports.up = (knex) => {
  return knex.schema.createTable('homes', (table) => {
    table.increments('id').primary()
    table.string('house_adress')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('homes')
}
