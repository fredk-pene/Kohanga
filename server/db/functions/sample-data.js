const connection = require('../connection')

module.exports = { getSampleData }

// get route db
function getSampleData(id, db = connection) {
  return db('sample_data').select().where('house_address_id', id).first()
}
