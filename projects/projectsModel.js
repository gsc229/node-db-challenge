const db = require('../db-config');

module.exports = {
  findProjects,
  findProject,
  getProjectTasks,
  getAllResources,
  addResource,
  addTask,
  addProject
}


function findProjects() {
  return db('projects')
}

function findProject(proj_id) {
  return db('projects')

    .where({ id: proj_id })
    .first()

}

function getProjectTasks(proj_id) {
  return db('projects')
    .join('tasks', 'tasks.proj_id', 'projects.id')
    .select('projects.project_name', 'projects.description', 'tasks.task_description', 'tasks.completed', 'tasks.id')
    .where({ 'proj_id': proj_id })
}

function getAllResources() {
  return db('resources')
}

function addResource(newResource) {
  return db('resources')
    .insert(newResource);
}

function addTask(newTask) {
  return db('tasks')
    .insert(newTask)
}

function addProject(newPrject) {
  return db('projects')
    .insert(newPrject);
}


/*
ENDPOINTS:
 Design the data model and use knex migrations to create the database and tables.
 Build an API with endpoints for:
 1. adding resources.
 2. retrieving a list of resources.
 3. adding projects.
 4. retrieving a list of projects.
 5. adding tasks.
 6. retrieving a list of tasks. The list of tasks should include the project name and      project description.
 When returning project or task information, the completed property should be true or false.

*/