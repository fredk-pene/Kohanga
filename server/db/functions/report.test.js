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
  it('returns the correct number of reports', () => {
    return db.getRentersReports(1, testDb).then((reports) => {
      expect(reports).toHaveLength(0)
      return null
    })
  })
})
// describe('createReportById', () => {
//   it('return a report related to the id', () => {
//     return db.createRentersReport(1, testDb).then((report) => {
//       expect(report).toHaveLength(1)
//       expect(report[1]).toMatch(1)
//       return null
//     })
//   })
// })

// describe('addNews', () => {
//   it('adds the new news to the db', () => {
//     const bidData = {
//       house_address_id: '',
//       date_submitted: '',
//       status: '',
//       report_submitter: '',
//       address: '',
//       email: '',
//       current_rent: '',
//       bond: '',
//       rent_advance: '',
//       start_date: '',
//       occupancy: '',
//       pets_cats: '',
//       pets_dogs: '',
//       garden: '',
//       home_health_insulation_ceiling: '',
//       home_health_insulation_floor: '',
//       home_health_insulation_wall: '',
//       home_health_extractor_fan: '',
//       home_health_rangehood: '',
//       security_system: '',
//       heating: '',
//       ventilation_system: '',
//       fire_alarms: '',
//       double_glazed: '',
//       neighborhood_noise: '',
//       rate_home_health: '',
//       energy_sources: '',
//       water_tank: '',
//       composting_system: '',
//       rate_property_manager: '',
//       rate_property_manager_responsiveness: '',
//       other_comments: '',
//     }
//     return db.createRentersReport(id, testDb).then(([id]) => {})
//   }).then((report) => {
//     expect(report.house_address_id).toBe(1)
//     expect(report.date_submitted).toBe(0)
//     expect(report.status).toBe(1)
//     expect(report.report_submitter).toMatch('Testing the tests')
//     return null
//   })
// })

// test('get all the data', () => {
//   return getRentersReports(testDb).then((tasks) => {
//     console.log(tasks)

//     expect(tasks).toBe('Approved')
//   })
// })

// describe('createsreport', () => {
//   it('creates a new report in db', () => {
//     const bidData = {
//       house_address_id: '',
//       date_submitted: '',
//       status: '',
//       report_submitter: '',
//       address: '',
//       email: '',
//       current_rent: '',
//       bond: '',
//       rent_advance: '',
//       start_date: '',
//       occupancy: '',
//       pets_cats: '',
//       pets_dogs: '',
//       garden: '',
//       home_health_insulation_ceiling: '',
//       home_health_insulation_floor: '',
//       home_health_insulation_wall: '',
//       home_health_extractor_fan: '',
//       home_health_rangehood: '',
//       security_system: '',
//       heating: '',
//       ventilation_system: '',
//       fire_alarms: '',
//       double_glazed: '',
//       neighborhood_noise: '',
//       rate_home_health: '',
//       energy_sources: '',
//       water_tank: '',
//       composting_system: '',
//       rate_property_manager: '',
//       rate_property_manager_responsiveness: '',
//       other_comments: '',
//     }

//     return bidDatas
//       .createRentersReport(bidData, testDb)
//       .then((ids) => bidDatas.createRentersReport(ids[0], testDb))
//       .then((report) => {
//         expect(report.id).not.toBeNull()
//         expect(report.house_address_id).toBe(
//           '393-Wairau-Road-Totara-Vale-Auckland-0629'
//         )
//         expect(report.date_submitted).toBe(22092022)
//         expect(report.report_submitter).toBe('renter')
//         expect(report.status).toBe('Approved')
//         expect(report.email).toBe('fredpene@hotmail.co.nz')
//         expect(report.current_rent).toBe(850)
//         expect(report.bond).toBeNull()
//         expect(report.rent_advance).toBeNull()
//         expect(report.start_date).toBe(12062021)
//         expect(report.occupancy).toBe(5)
//         expect(report.pets_cats).toBe(0)
//         expect(report.pets_dogs).toBe(0)
//         expect(report.home_health_insulation_ceiling).toBe(1)
//         expect(report.home_health_insulation_floor).toBeNull()
//         expect(report.home_health_insulation_wall).toBe(1)
//         expect(report.home_health_rangehood).toBe(1)
//         expect(report.security_system).toBe(0)
//         expect(report.heating).toBe('{heat pump}')
//         expect(report.ventilation_system).toBe(1)
//         expect(report.fire_alarms).toBe(1)
//         expect(report.double_glazed).toBe(0)
//         expect(report.neighborhood_noise).toBe('No')
//         expect(report.rate_home_health).toBe(3)
//         expect(report.energy_sources).toBe('LPG, Mains Electric')
//         expect(report.water_tank).toBe(0)
//         expect(report.composting_system).toBe(0)
//         expect(report.rate_property_manager).toBe(4)
//         expect(report.rate_property_manager_responsiveness).toBe(4)
//         expect(report.other_comments).toBe(
//           'front door has a gap at the bottom causing a bad draught in the winter, downstairs bathroom fan extractor is shit so i use a dehumidifier instead'
//         )

//         return null
//       })
//   })
// })

// test('addTodo adds a new task to the database', () => {
//   // Add a task to TODO table
//   const todoTask = 'Do a cartwheel'
//   return addTodo(todoTask, testDb)
//     .then((returned) => {
//       console.log(returned)
//       expect(returned[0]).toEqual(4)

//       return getAll(testDb)
//     })
//     .then((tasks) => {
//       // Check the last row / data is the one we added
//       expect(tasks[3].task).toMatch(todoTask)
//     })
