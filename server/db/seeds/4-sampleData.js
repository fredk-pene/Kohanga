exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sample_data').del()
  await knex('sample_data').insert([
    {
      id: 1,
      house_address_id: '393-Wairau-Road-Totara-Vale-Auckland-0629',
      bathrooms: '2',
      bedrooms: '3',
      car_parks: 'Road',
      address: '393 Wairau Road, Totara Vale, Auckland',
      internet: 'Fibre',
      land_area: '809',
      floor_area: '150',
      year_built: '1950s',
    },
    {
      id: 2,
      house_address_id: '148-Howe-Street-Freemans-Bay-Auckland-1011',
      bathrooms: '2',
      bedrooms: '1',
      car_parks: 'No Records',
      address: '16/148 Howe Street Freemans Bay, Auckland 1011',
      internet: 'Fibre',
      land_area: 'N/A',
      floor_area: '65',
      year_built: '1960s',
    },
    {
      id: 3,
      house_address_id: '31-Walters-Road-Mount-Eden-Auckland-1024',
      bathrooms: '2',
      bedrooms: '4',
      car_parks: '2',
      address: '31 Walters Road, Mount Eden, 1024, New Zealand',
      internet: 'Fibre',
      land_area: '612',
      floor_area: '145',
      year_built: '1910s',
    },
    {
      id: 4,
      house_address_id: '52-Nikau-Road-Otahuhu-Auckland-1062',
      bathrooms: '1',
      bedrooms: '4',
      car_parks: 'Road',
      address: '52 Nikau Road, Otahuhu, Auckland',
      internet: 'Fibre',
      land_area: '809',
      floor_area: '83',
      year_built: '1920s',
    },
  ])
}
