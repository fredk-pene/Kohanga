exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('homes').del()
  await knex('homes').insert([{ id: 1, house_adress: 'rowValue1' }])
}
