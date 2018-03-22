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
















module.exports = router
