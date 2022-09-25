exports.up = (knex) => {
  return knex.schema.createTable('sample_data', (table) => {
    table.increments('id')
    table.integer('house_address_id')
    //Sample Data
    table.string('house_address')
    table.string('bathrooms')
    table.string('car_parks')
    table.string('internet')
    table.string('land_area')
    table.string('floor_area')
    table.integer('year_built')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('sample_data')
}
