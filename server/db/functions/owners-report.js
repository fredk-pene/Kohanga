const connection = require('../connection')

module.exports = { createOwnersReport, getOwnerReports, editOwnersStatus }

// get route db
function getOwnerReports(id, db = connection) {
  return db('owners_report')
    .select()
    .where('id', id)
    .where('status', 'Approved')
    .orderBy('date_submitted')
}

//  post function for owner report
function createOwnersReport(data, db = connection) {
  const {
    houseId,
    dateSubmitted,
    approvalStatus,
    address,
    email,
    currentRent,
    bond,
    rentAdvance,
    ownerStartDate,
    occupancy,
    pets,
    garden,
    homeHealthInsulationCeiling,
    homeHealthInsulationFan,
    homeHealthInsulationFloor,
    homeHealthInsulationWall,
    homeHealthRangeHood,
    securitySystem,
    heating,
    ventilationSystem,
    fireAlarms,
    doubleGlazed,
    noise,
    energy,
    waterTank,
    compost,
    otherComments,
  } = data

  return db('owners_report').insert({
    house_address_id: houseId,
    date_submitted: dateSubmitted,
    status: approvalStatus,
    address: address,
    email: email,
    current_rent: currentRent,
    bond: bond,
    rent_advance: rentAdvance,
    owner_start_date: ownerStartDate,
    occupancy: occupancy,
    pets: pets,
    garden: garden,
    home_health_insulation_ceiling: homeHealthInsulationCeiling,
    home_health_insulation_floor: homeHealthInsulationFloor,
    home_health_insulation_wall: homeHealthInsulationWall,
    home_health_extractor_fan: homeHealthInsulationFan,
    home_health_rangehood: homeHealthRangeHood,
    security_system: securitySystem,
    heating: heating,
    ventilation_system: ventilationSystem,
    fire_alarms: fireAlarms,
    double_glazed: doubleGlazed,
    neighborhood_noise: noise,
    energy_sources: energy,
    water_tank: waterTank,
    composting_system: compost,
    other_comments: otherComments,
  })
}

function editOwnersStatus(id, data, db = connection) {
  const { approvalStatus } = data
  return db('owners_report').where('id', id).update({ status: approvalStatus })
}
