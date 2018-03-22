var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Project = require('../models/project');


router.post('/project', (req, res, next) => {
  // Project.create({
  //   name:req.body.name,
  //   user_id:req.body.userId,
  //   description:req.body.description,
  //   target_date:req.body.targetDate
  //   }, function(err, project) {
  //     if (err) {
  //       res.send(err)
  //     } else {
  //       console.log(project)
  //       console.log('CREATED Project')
  //     }
  //     console.log('REACHED THE END OF CREATE PROJECT ROUTE')
  //     res.json({project})
  // })
  console.log(req.body)
})

router.post('/task', (req, res, next) => {
  console.log(req.body)
})

// router.get('/', (req, res, next) => {
//   var userId = req.body.user.id
//   Project.find({'_id':userId}, (err, result) => {
//     if (err) {
//       console.log(err)
//       console.log('IT ERRORED')
//     } else {
//       console.log(result)
//       res.json({projects:result})
//     }
//   })
// })


module.exports = router
