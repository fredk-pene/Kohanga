const config = require('../knexfile').test
const testDb = require('knex')(config)
// const { createRentersReport } = require('./report')
const db = require('./report')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getReports', () => {
  it('returns the correct number of reports', () => {
    return db.getRentersReports(1, testDb).then((reports) => {
      expect(reports).toHaveLength(0)
      return null
    })
  })
})

describe('getAllReportsById', () => {
  it('returns the correct number of reports', () => {
    return db.getRentersReports(1, testDb).then((reports) => {
      expect(reports).toHaveLength(0)
      return null
    })
  })
})

describe('createRentersReport', () => {
  it('creates a new  report in the db', () => {
    const data = {
      house_address_id: '393-Wairau-Road-Totara-Vale-Auckland-0629',
      date_submitted: '',
      report_submitter: 'renter',
      status: 'Approved',
      email: 'fredpene@hotmail.co.nz',
      current_rent: 850,
      bond: 1000,
      rent_advance: 0,
      start_date: 12062021,
      occupancy: 5,
      pets_cats: 0,
      pets_dogs: 0,
      home_health_insulation_ceiling: 1,
      home_health_insulation_floor: 0,
      home_health_insulation_wall: 1,
      home_health_extractor_fan: 1,
      security_system: 0,
      heating: 'heat pump',
      ventilation_system: 1,
      fire_alarms: 1,
      double_glazed: 0,
      neighborhood_noise: 'No',
      rate_home_health: 3,
      energy_sources: 'LPG, Mains Electric',
      water_tank: 0,
      composting_system: 0,
      rate_property_manager: 4,
      rate_property_manager_responsiveness: 4,
      other_comments:
        'front door has a gap at the bottom causing a bad draught in the winter, downstairs bathroom fan extractor is shit so i use a dehumidifier instead',
    }

    return db
      .createRentersReport(data, testDb)
      .then(([data]) => {
        return db.getRentersReports(data, testDb)
      })
      .then(() => {
        expect(data.house_address_id).toBe(
          '393-Wairau-Road-Totara-Vale-Auckland-0629'
        )
        expect(data.date_submitted).toBe('')
        expect(data.report_submitter).toBe('renter')
        expect(data.status).toBe('Approved')
        expect(data.email).toBe('fredpene@hotmail.co.nz')
        expect(data.current_rent).toBe(850)
        expect(data.bond).toBe(1000)
        expect(data.rent_advance).toBe(0)
        expect(data.start_date).toBe(12062021)
        expect(data.occupancy).toBe(5)
        expect(data.pets_cats).toBe(0)
        expect(data.pets_dogs).toBe(0)
        expect(data.home_health_insulation_ceiling).toBe(1)
        expect(data.home_health_insulation_floor).toBe(0)
        expect(data.home_health_insulation_wall).toBe(1)
        expect(data.security_system).toBe(0)
        expect(data.heating).toBe('heat pump')
        expect(data.ventilation_system).toBe(1)
        expect(data.fire_alarms).toBe(1)
        expect(data.double_glazed).toBe(0)
        expect(data.neighborhood_noise).toBe('No')
        expect(data.rate_home_health).toBe(3)
        expect(data.energy_sources).toBe('LPG, Mains Electric')
        expect(data.water_tank).toBe(0)
        expect(data.composting_system).toBe(0)
        expect(data.rate_property_manager).toBe(4)
        expect(data.rate_property_manager_responsiveness).toBe(4)
        expect(data.other_comments).toBe(
          'front door has a gap at the bottom causing a bad draught in the winter, downstairs bathroom fan extractor is shit so i use a dehumidifier instead'
        )
        return null
      })
  })
})
