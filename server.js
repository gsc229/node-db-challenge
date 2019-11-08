const express = require('express');
const projectsRouter = require('./projects/projectsRouter');
const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Writing a recipe api</h2>`)
})

module.exports = server;