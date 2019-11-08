const express = require('express');
const Projects = require('./projectsModel');
const router = express.Router();


router.get('/', (req, res) => {
  Projects.findProjects()
    .then(projs => {
      res.status(200).json(projs);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
})

router.get('/resources', (req, res) => {
  Projects.getAllResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

router.get('/:id', (req, res) => {
  const proj_id = req.params.id
  Projects.findProject(proj_id)
    .then(proj => {
      res.status(200).json(proj)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project by that id' });
    });
})

router.get('/:id/tasks', (req, res) => {
  const proj_id = req.params.id;
  Projects.getProjectTasks(proj_id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks by that project id' });
    });
})





module.exports = router;

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