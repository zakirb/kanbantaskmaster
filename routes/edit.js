var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Project = require('../models/project');


router.put('/project', (req, res, next) => {

  console.log(req.body)
})

router.put('/taskstatus', (req, res, next) => {
  console.log(req.body)
})






module.exports = router
