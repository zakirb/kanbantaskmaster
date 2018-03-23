var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Project = require('../models/project');


router.delete('/project', (req, res, next) => {
  console.log(req.body)
})

// router.post('/project', (req, res, next) => {
//
//   console.log(req.body)
// })



module.exports = router
