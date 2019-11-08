
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    { step_num: 1, proj_id: 1, task_description: "build foundation", notes: "", completed: false },
    { step_num: 2, proj_id: 1, task_description: "build walls", notes: "", completed: false },
    { step_num: 3, proj_id: 1, task_description: "build roof", notes: "", completed: false }
  ]);
};
