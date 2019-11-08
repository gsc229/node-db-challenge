
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project_resources').insert([
    { proj_id: 1, res_id: 1 },
    { proj_id: 1, res_id: 2 },
    { proj_id: 1, res_id: 3 }
  ]);
};
