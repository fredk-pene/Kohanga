exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('renters_report').del()
  await knex('renters_report').insert([
    { id: 1, house_address_id: 'rowValue1' },
  ])
}
