exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('owners_report').del()
  await knex('owners_report').insert([
    {
      id: 1,
      house_address_id: 'rowValue1',
      date_submitted: '22092022',
      status: 'approved',
      address: '52 Nikau Road, Otahuhu',
      email: 'mikeshpatel39@gmail.com',
      current_rent: '620',
      bond: '0',
      rent_advance: '0',
      owner_start_date: '20122020',
      occupancy: '4',
      pets: '1',
      garden: '4 garden beds, many fruit trees',
      home_health_insulation_ceiling: '1',
      home_health_insulation_floor: '1',
      home_health_insulation_wall: '1',
      home_health_extractor_fan: '0',
      home_health_rangehood: '0',
      security_system: '0',
      heating: '{heat pump}',
      ventilation_system: '1',
      fire_alarms: '1',
      double_glazed: '1',
      neighborhood_noise: 'No',
      energy_sources: '{mains gas, mains electric}',
      water_tank: '0',
      composting_system: '1',
      other_comments: '',
    },
  ])
}
