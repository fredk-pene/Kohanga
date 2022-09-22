exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('owners_report').del()
  await knex('owners_report').insert([{ id: 1, house_address_id: 'rowValue1' }])
}
