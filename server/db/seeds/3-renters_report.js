exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('renters_report').del()
  await knex('renters_report').insert([
    {
      id: 1,
      house_address_id: 'rowValue1',
      date_submitted: '22092022',
      status: 'approved',
      address: '393 Wairau Road, Auckland',
      email: 'fredpene@hotmail.co.nz',
      current_rent: '850',
      bond: '',
      rent_advance: '',
      rent_start_date: '12062021',
      occupancy: '5',
      pets: '0',
      garden:
        'big fuck off lawn on a vicious incline (not fun to mow), surrounded by bush, garden bed on lawn',
      home_health_insulation_ceiling: '1',
      home_health_insulation_floor: '',
      home_health_insulation_wall: '1',
      home_health_extractor_fan: '1',
      home_health_rangehood: '1',
      security_system: '0',
      heating: '{heat pump}',
      ventilation_system: '1',
      fire_alarms: '1',
      double_glazed: '0',
      neighborhood_noise: 'No',
      rate_home_health: '3',
      energy_sources: '{LPG, mains electric}',
      water_tank: '0',
      composting_system: '0',
      rate_property_manager: '4',
      rate_property_manager_responsiveness: '4',
      other_comments:
        'front door has a gap at the bottom causing a bad draught in the winter, downstairs bathroom fan extractor is shit so i use a dehumidifier instead',
    },
    {
      id: 2,
      house_address_id: 'rowValue1',
      date_submitted: '23092022',
      status: 'approved',
      address: '16/148 Howe Street Freemans Bay, Auckland 1011',
      email: 'karlbayly@gmail.com',
      current_rent: '750',
      bond: '3000',
      rent_advance: '1500',
      rent_start_date: '01042021',
      occupancy: '3',
      pets: '0',
      garden: 'Non',
      home_health_insulation_ceiling: '',
      home_health_insulation_floor: '',
      home_health_insulation_wall: '',
      home_health_extractor_fan: '1',
      home_health_rangehood: '1',
      security_system: '0',
      heating: '{Heat pump}',
      ventilation_system: '0',
      fire_alarms: '1',
      double_glazed: '0',
      neighborhood_noise: 'No',
      rate_home_health: '3',
      energy_sources: 'Grid electric',
      water_tank: '0',
      composting_system: '1',
      rate_property_manager: '3',
      rate_property_manager_responsiveness: '3',
      other_comments: '',
    },
    {
      id: 3,
      house_address_id: 'rowValue1',
      date_submitted: '23092022',
      status: 'approved',
      address: '31 Walters Road, Mount Eden, 1024, New Zealand',
      email: 'fergus.haywood5@gmail.com',
      current_rent: '250',
      bond: '1000',
      rent_advance: '500',
      rent_start_date: '24032022',
      occupancy: '7',
      pets: '',
      garden: 'We have a garden and backyard',
      home_health_insulation_ceiling: '',
      home_health_insulation_floor: '1',
      home_health_insulation_wall: '1',
      home_health_extractor_fan: '1',
      home_health_rangehood: '1',
      security_system: '1',
      heating: 'HRV throughout house, central heating',
      ventilation_system: '1',
      fire_alarms: '',
      double_glazed: '1',
      neighborhood_noise:
        'We live next to Eden Park, when there are games on there is a lot of noise.',
      rate_home_health: '5',
      energy_sources: '{solar, electric mains, gas}',
      water_tank: '',
      composting_system: '1',
      rate_property_manager: '5',
      rate_property_manager_responsiveness: '5',
      other_comments:
        'Our landlord quite often comes over with very little warning, we know this is techincally wrong and they need to give us more time but most of the time it is for the improvement of the house, and we dont really care that they come over with small amount of warning.',
    },
  ])
}
