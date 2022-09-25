const connection = require('../connection')

module.exports = {
  getRentersReports,
  createRentersReport,
  editRentersStatus,
}

function getRentersReports(id, db = connection) {
  return db('report')
    .select()
    .where('id', id)
    .where('status', 'approved')
    .orderBy('date_submitted')
}
// post report function
function createRentersReport(data, db = connection) {
  const {
    houseId,
    dateSubmitted,
    reportSubmitter,
    approvalStatus,
    address,
    email,
    currentRent,
    bond,
    rentAdvance,
    StartDate,
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
    rateHh,
    energy,
    waterTank,
    compost,
    rateManager,
    rateResponse,
    otherComments,
  } = data

  return db('report').insert({
    house_address_id: houseId,
    date_submitted: dateSubmitted,
    status: approvalStatus,
    report_submitter: reportSubmitter,
    address: address,
    email: email,
    current_rent: currentRent,
    bond: bond,
    rent_advance: rentAdvance,
    start_date: StartDate,
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
    rate_home_health: rateHh,
    energy_sources: energy,
    water_tank: waterTank,
    composting_system: compost,
    rate_property_manager: rateManager,
    rate_property_manager_responsiveness: rateResponse,
    other_comments: otherComments,
  })
}

function editRentersStatus(id, data, db = connection) {
  const { approvalStatus } = data
  console.log({ approvalStatus })
  return db('report').where('id', id).update({ status: approvalStatus })
}
