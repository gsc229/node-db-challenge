const express = require('express');
const Projects = require('./projectsModel');
const router = express.Router();


router.get('/', (req, res) => {
  Projects.findProjects()
    .then(projs => {
      projs.forEach(proj => {
        proj.completed = proj.completed ? true : false
      })
      res.status(200).json(projs);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
})

router.post('/', (req, res) => {
  const newProject = req.body;
  Projects.addProject(newProject)
    .then(info => {
      res.status(201).json(info);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create projects' });
    });
})

router.post('/task', (req, res) => {
  const newTask = req.body;
  Projects.addTask(newTask)
    .then(info => {
      res.status(201).json(info);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create task' });
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

router.post('/resources', (req, res) => {
  const newResource = req.body;
  Projects.addResource(newResource)
    .then(info => {
      res.status(201).json(info)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

router.get('/:id', (req, res) => {
  const proj_id = req.params.id;

  Projects.findProject(proj_id)
    .then(proj => {
      proj.completed = proj.completed ? true : false;
      res.status(200).json(proj)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project by that id' });
    });
})


router.get('/:id/with-tasks', (req, res) => {
  const proj_id = req.params.id;
  let projTasks;
  Projects.getProjectTasks(proj_id)
    .then(tasks => {
      tasks.forEach(task => {
        task.completed = task.completed ? true : false
      })
      projTasks = tasks

      Projects.findProject(proj_id)
        .then(proj => {
          console.log(projTasks);
          proj.tasks = projTasks;
          res.status(200).json(proj);
        })
    })
})

router.get('/:id/tasks', (req, res) => {
  Projects.getProjectTasks(proj_id)
    .then(tasks => {

      tasks.forEach(task => {
        task.completed = task.completed ? true : false
      })
      console.log(tasks);
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
 1. adding resources. --
 2. retrieving a list of resources. --
 3. adding projects. --
 4. retrieving a list of projects. --
 5. adding tasks. --
 6. retrieving a list of tasks. The list of tasks should  include the project name and      project description.
 When returning project or task information, the completed property should be true or false. -- ~

*/