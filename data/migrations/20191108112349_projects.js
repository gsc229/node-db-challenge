
exports.up = function (knex) {
  return knex.schema.createTable('projects', col => {
    col.increments();
    col.string('project_name', 255).notNullable().unique();
    col.string('description', 255);
    col.boolean('completed').notNullable().defaultTo(false);

  })
    .createTable('tasks', col => {
      col.increments()
      col.integer('step_num').notNullable();
      col.integer('proj_id').notNullable().unsigned().references('id').inTable('projects').onDelete("CASCADE").onUpdate("CASCADE");
      col.string('task_description', 255).notNullable().unique();
      col.string('notes', 255)
      col.boolean('completed').notNullable().defaultTo(false);

    })
    .createTable('resources', col => {
      col.increments();
      col.integer('proj_id').unsigned().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
      col.string('resource_name', 255).notNullable().unique()
      col.string('res_desc', 255).notNullable()
      col.string('res_notes', 255)

    })
    .createTable('project_resources', col => {
      col.increments()
      col.integer('proj_id').notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
      col.integer('res_id').notNullable().references('id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
