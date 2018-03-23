var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');


router.delete('/project', (req, res, next) => {
  Project.findByIdAndRemove(req.query.projectId, (err, offer) => {
    if (err) {
      console.log('ERROR', err)
    } else {
      res.send(offer)
    }
  })
})

// router.post('/project', (req, res, next) => {
//
//   console.log(req.body)
// })



module.exports = router
