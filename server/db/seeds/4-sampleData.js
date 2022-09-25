exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sampleData').del()
  await knex('sampleData').insert([
    {
      id: 1,
      house_address_id: '393-Wairau-Road-Totara-Vale-Auckland-0629',
      bathrooms: 'renter',
      car_parks: 'approved',
      address: '393 Wairau Road, Auckland',
      internet: 'fredpene@hotmail.co.nz',
      land_area: '850',
      floor_area: '',
      year_built: '',
    },
    {
      id: 2,
      house_address_id: '148-Howe-Street-Freemans-Bay-Auckland-1011',
      bathrooms: 'renter',
      car_parks: 'approved',
      address: '16/148 Howe Street Freemans Bay, Auckland 1011',
      internet: 'fredpene@hotmail.co.nz',
      land_area: '850',
      floor_area: '',
      year_built: '',
    },
    {
      id: 3,
      house_address_id: '31-Walters-Road-Mount-Eden-Auckland-1024',
      bathrooms: 'renter',
      car_parks: 'approved',
      address: '31 Walters Road, Mount Eden, 1024, New Zealand',
      internet: 'fredpene@hotmail.co.nz',
      land_area: '850',
      floor_area: '',
      year_built: '',
    },
    {
      id: 4,
      house_address_id: '52-Nikau-Road-Otahuhu-Auckland-1062',
      bathrooms: 'renter',
      car_parks: 'approved',
      address: '52 Nikau Road, Otahuhu',
      internet: 'fredpene@hotmail.co.nz',
      land_area: '850',
      floor_area: '',
      year_built: '',
    },
  ])
}
