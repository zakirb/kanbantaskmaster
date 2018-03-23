var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');
var Task = require('../models/project')


router.post('/projects', (req, res, next) => {
  var userId = req.body.userId
  Project.find({"user_id":userId}, (err, projects) => {
    console.log(projects)
    res.json(projects)
  })
})

router.post('/findOne/project', (req, res, next) => {
  var projectId = req.body.projectId
  console.log(projectId)
  Project.find({"project_id":projectId}, (err, project) => {
    console.log(project)
    res.json(project)
  })
})

router.post('/findOne/task', (req, res, next) => {
  var taskId = req.body.taskId
  console.log(taskId)
  Project.find({"task_id":taskId}, (err, task) => {
    console.log(task)
    res.json(task)
  })
})





module.exports = router
