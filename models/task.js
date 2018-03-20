var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
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

var taskSchema = new mongoose.Schema({
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
  updated: {
    type: Date,
    required: true,
    default: Date.now
  },
  assigned_to: {
    type: Number,
    required: true
  },
  task_steps: [taskStepsSchema]
})

taskSchema.set('JSON', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      title: ret.title,
      description: ret.description,
      target_date: ret.target_date,
      updated: ret.updated,
      assigned_to: ret.assigned_to,
      task_steps: ret.task_steps
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
  console.log('WE ARE IN THE PRE-SAVE ROUTE')
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

var Task = mongoose.model('Project', taskSchema);

module.exports = Task;
