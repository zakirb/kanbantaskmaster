var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');
var Task = require('../models/project')


router.post('/project', (req, res, next) => {
  Project.create({
    title:req.body.title,
    user_id:req.body.owner,
    description:req.body.description,
    target_date:req.body.targetDate
    }, function(err, project) {
      if (err) {
        res.send(err)
      } else {
        console.log(project)
        console.log('CREATED Project')
      }
      console.log('REACHED THE END OF CREATE PROJECT ROUTE')
      res.json({project})
  })
  // console.log("create/post route hit")
  console.log(req.body)
})



router.post('/task', (req, res, next) => {

  Project.findOne({"_id":req.body.project_id}, (err, project) => {
    if (err) {
      console.log('ERROR 1')
    } else {
      // console.log('PROJECT SHOULD BE HERE')
      // console.log(project)

    var newTask =  project.tasks.create({
        description: req.body.description,
        assigned_to: req.body.assigned_to,
        task_status: req.body.task_status,
        target_date:req.body.target_date
      })

    project.tasks.push(newTask)
    project.save( (err) => {
      if (err) {
        console.log('ERROR ' + err)
      } else {
        console.log('SUCCESS PUSHING newTask')
        console.log(project)
        res.json(project)
      }
    })
    }
  })
})


      // var newTasks = currentTasks.push(req.body)
      // // project.tasks.push(req.body)
      // // var tasksArray = project.tasks
      // project.set({tasks:newTasks});
      // project.save( function(err, updatedproject) {
      //   if (err) {
      //     console.log('ERROR SETTING DATABASE')
      //   } else {
      //     console.log('SUCCESS SETTING')
      //     console.log(updatedProject)




    // Project.findByIdAndUpdate(req.body.project_id, {$set: {tasks:[tasksArray]}}, (err, updatedProject) => {
    //   if (err) {
    //     console.log('ERROR SAVING TO DATABASE')
    //   } else {
    //     console.log('SUCCESS SAVING TO DB')
    //     console.log(updatedProject)
    //   }




// router.get('/', (req, res, next) => {
// console.log('create/get route hit')
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
