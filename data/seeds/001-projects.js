
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    { project_name: "Build House", description: 'A biggo house', completed: false },
    { project_name: "Build Boat", description: 'A huge boat', completed: false },
    { project_name: "Build Airplane", description: 'A fast airplane', completed: false }
  ]);
};
