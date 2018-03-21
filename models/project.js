var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require('User');
// import User from './User';
// var Task = require('Task');
// import Task from './Task';
// import the task list
// var taskSchema = new Schema({ name: 'string' });
// import the team list
// var teamSchema = new Schema({ name: 'string' });

// schematypes mongoose
// http://mongoosejs.com/docs/schematypes.html

// mongoose validation
// http://mongoosejs.com/docs/validation.html

// sub documenation from Mongoose
// http://mongoosejs.com/docs/subdocs.html
// var childSchema = new Schema({ name: 'string' });
// Array of subdocuments
  // children: [childSchema],
  // Single nested subdocuments. Caveat: single nested subdocs only work
  // in mongoose >= 4.2.0
  // child: childSchema

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
  task: [Task],
  user_id: ObjectId,
  updated: {
    type: Date,
    required: true,
    default: Date.now
  }
  }
})

projectSchema.set('JSON', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      title: ret.title,
      description: ret.description,
      target_date: ret.target_date,
      updated: ret.updated,
      project_tasks: ret.project_tasks,
      project_team: ret.project_team
    }
    return returnJson
  }
})


projectSchema.methods.authenticated = function(password, cb) {
  bcrypt.compare(password, this.password, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res ? this : false)
    }
  })
}

projectSchema.pre('save', function(next) {
  console.log('WE ARE IN THE projectSchema PRE-SAVE ROUTE')
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

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
