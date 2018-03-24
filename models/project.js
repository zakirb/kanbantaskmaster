var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var User = require('./user');
// var Task = require('./task');

////// STEP SCHEMA ///////
// var stepSchema = new mongoose.Schema({
//   step_number: {
//     type: Number,
//     required: false
//   },
//   step_action: {
//     type: String,
//     required: false,
//     minLength: 5,
//     maxLength: 1000
//   }
// })

// stepSchema.set('JSON', {
//   transform: function (doc, ret, options) {
//     let returnJson = {
//       _id: ret._id,
//       step_number: ret.step_number,
//       step_action: ret.step_action
//     }
//     return returnJson
//   }
// })
// steps: [ stepSchema ],
// task_steps: ret.task_steps,
////// TASK SCHEMA ///////
var taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1000
  },
  target_date: {
    type: Date,
    required: true
  },
  task_status: {
    type: String,
    required: true
  },
  assigned_to: {
    type: String,
    required: false,
    minLength: 5,
    maxLength: 1000
  },
  updated: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

taskSchema.set('JSON', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      description: ret.description,
      target_date: ret.target_date,
      task_status: ret.status,
      assigned_to: ret.assigned_to,
      project_id: ret.project_id,
      updated: ret.updated
    }
    return returnJson
  }
})



////// PROJECT SCHEMA ///////
var projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 99
    },
    description: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 1000
    },
    target_date: {
      type: Date,
      required: true
    },
    project_team: {
      type: Array,
      required: false
    },
    tasks: [ taskSchema ],
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    updated: {
      type: Date,
      required: true,
      default: Date.now()
    }
  }
)

projectSchema.set('JSON', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      title: ret.title,
      description: ret.description,
      target_date: ret.target_date,
      user_id: ret.user_id,
      tasks: ret.tasks,
      project_team: ret.project_team,
      updated: ret.updated
    }
    return returnJson
  }
})

////// PROJECT SCHEMA METHODS ///////
projectSchema.methods.authenticated = function(password, cb) {
  bcrypt.compare(password, this.password, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res ? this : false)
    }
  })
}

////// PROJECT SCHEMA PRESAVE  ///////
projectSchema.pre('save', function(next) {
  console.log('WE ARE IN THE projectSchema PRE-SAVE ROUTE')

  next();
})

// var Step = mongoose.model('Step', stepSchema);
var Task = mongoose.model('Task', taskSchema);
var Project = mongoose.model('Project', projectSchema);

// module.exports = Step;
module.exports = Task;
module.exports = Project;
