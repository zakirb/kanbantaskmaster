var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var User = require('./user');
// var Task = require('./task');

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
      required: true
    },
    tasks: [{
      type: Array,
      required: true
    }],
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:true
    },
    updated: {
      type: Date,
      required: true,
      default: Date.now
    }
  });


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
  // console.log (Project);
  // var hash = bcrypt.hashSync(this.password, 10)
  // this.password = hash

  // assert.equal(error.errors['title'].message,
  //       'Project `title` is required.');
  // assert.equal(error.errors['description'].message,
  //       'Project `description` is required.');
  // assert.equal(error.errors['target_date'].message,
  //       'Project `target_date` is required.');
  //
  //     error = project.validateSync();
  //     assert.equal(error.errors['title'].message,
  //       'Project `tile` is required.');
  //     assert.equal(error.errors['description'].message,
  //           'Project `description` is required.');
  //     assert.equal(error.errors['target_date'].message,
  //           'Project `target_date` is required.');

  next();
})

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
