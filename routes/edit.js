var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');


router.put('/project', (req, res, next) => {

  console.log(req.body)
})

router.put('/taskstatus', (req, res, next) => {
  console.log(req.body)
  let dropDownValue
  switch (req.body.dropDownValue) {
    case 1: dropDownValue = "todo"
    break;
    case 2: dropDownValue = "progress"
    break;
    case 3: dropDownValue = "review"
    break;
    case 4: dropDownValue = "completed"
    break;
  }

  console.log('THIS IS THE DROPDOWN VALUE IN TEXT: ' + dropDownValue)

  Project.findOneAndUpdate(
    { "tasks._id": req.body.task._id }, { "$set": {"tasks.$.task_status": dropDownValue}},
    (err, project) => {
      if (err) {
        console.log('ERROR' + err)
      } else {
        console.log('SUCCESS UPDATING TASK STATUS', project)
        res.json(project)
      }
    })
});






module.exports = router
