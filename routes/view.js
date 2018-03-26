var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');
var Task = require('../models/project')


router.get('/projects', (req, res, next) => {
  var userId = req.query.userId
  Project.find({"user_id":userId}, (err, projects) => {
    res.json(projects)
  })
})

router.get('/findOne/project', (req, res, next) => {
  var projectId = req.query.projectId
  console.log(req.query)
  console.log(projectId)
  Project.findById(projectId, (err, project) => {
    console.log(project)
    res.json(project)
  })
})

router.get('/findOne/task', (req, res, next) => {
  var taskId = req.query.taskId
  console.log(req.query)
  console.log(taskId)
  Project.findById(taskId, (err, task) => {
    console.log(task)
    res.json(task)
  })
})





module.exports = router
