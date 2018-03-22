var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Project = mongoose.model('Project', projectSchema);


var teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 99
  },
  team_members: {
    type: Array,
    required: true
  },
  project_id: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  updated: {
    type: Date,
    required: true,
    default: Date.now
  }
})

teamSchema.set('JSON', {
  transform: function (doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      name: ret.name,
      team_members: ret.team_members,
      project_id: ret.project_id,
      updated: ret.updated
    }
    return returnJson
  }
})


teamSchema.methods.authenticated = function(password, cb) {
  bcrypt.compare(password, this.password, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res ? this : false)
    }
  })
}

teamSchema.pre('save', function(next) {
  console.log('WE ARE IN THE PRE-SAVE ROUTE')
  
  next();
})

var ProjectTeam = mongoose.model('ProjectTeam', teamSchema);

module.exports = ProjectTeam;
