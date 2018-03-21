var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Project = require('./project');

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
  status: {
    type: String,
    required: true,
    enum: ["To Do", "In Progress", "In Review", "Completed"],
    default: "To Do"
  },
  assigned_to: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1000
  },
  steps: [
    {
      step_number: Number,
      required: true
    },
    {
      step_action: String,
      required: true,
      minLength: 5,
      maxLength: 1000
    }
  ],
  project_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }],
  updated: {
    type: Date,
    required: true,
    default: Date.now
  }
})

taskSchema.set('JSON', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      description: ret.description,
      target_date: ret.target_date,
      status: ret.status,
      assigned_to: ret.assigned_to,
      task_steps: ret.task_steps,
      project_id: ret.project_id,
      updated: ret.updated
    }
    return returnJson
  }
})


taskSchema.methods.authenticated = function(password, cb) {
  bcrypt.compare(password, this.password, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res ? this : false)
    }
  })
}

taskSchema.pre('save', function(next) {
  console.log('WE ARE IN THE taskSchema PRE-SAVE ROUTE')
  if (err) return handleError(err);
  // var hash = bcrypt.hashSync(this.password, 10)
  // this.password = hash

  // assert.equal(error.errors['title'].message,
  //       'Project `title` is required.');
  // assert.equal(error.errors['description'].message,
  //       'Project `description` is required.');
  // assert.equal(error.errors['target_date'].message,
  //       'Project `target_date` is required.');

      // error = project.validateSync();
      // assert.equal(error.errors['title'].message,
      //   'Project `tile` is required.');
      // assert.equal(error.errors['description'].message,
      //       'Project `description` is required.');
      // assert.equal(error.errors['target_date'].message,
      //       'Project `target_date` is required.');

  next();
})

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
