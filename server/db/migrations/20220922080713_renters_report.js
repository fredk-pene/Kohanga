exports.up = (knex) => {
  return knex.schema.createTable('renters_report', (table) => {
    table.increments('id')
    table.integer('house_address_id')
    table.integer('date_submitted')
    table.string('status')
    table.string('address')
    table.string('email')
    table.integer('current_rent')
    table.integer('bond')
    table.integer('rent_advance')
    table.integer('rent_start_date')
    table.integer('occupancy')
    table.integer('pets')
    table.string('garden')
    // Healthy homes
    table.integer('home_health_insulation_ceiling_')
    table.integer('home_health_insulation_floor')
    table.integer('home_health_insulation_wall')
    table.integer('home_health_extractor_fan')
    table.integer('home_health_rangehood')
    table.integer('security_system')
    table.string('Heating')
    table.string('ventilation_system')
    table.integer('double-glazed')
    table.string('neighborhood_noise')
    table.integer('rate_home_health')
    // sustainablity
    table.string('energy_sources')
    table.integer('water_tank')
    table.integer('composting_system')
    table.integer('rate_property_manager')
    table.integer('rate_property_manager_responsiveness')
    table.string('other_comments')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('renters_report')
}
