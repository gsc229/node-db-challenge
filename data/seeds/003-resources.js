
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { proj_id: 1, resource_name: 'hammer', res_desc: 'used to hammer nails', res_notes: '' }, // res_id 1
    { proj_id: 1, resource_name: 'saw', res_desc: 'for cutting wood', res_notes: '' }, // res_id 2
    { proj_id: 1, resource_name: 'drill', res_desc: 'for drilling holes', res_notes: '' } // res_id 3
  ]);
};
