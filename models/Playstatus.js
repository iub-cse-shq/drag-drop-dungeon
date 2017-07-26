var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlaystatusSchema = {

  status : {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  map: {
    type: Schema.ObjectId,
    ref: 'Map'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Playstatus = mongoose.model('Playstatus', PlaystatusSchema, 'playstatus');
module.exports = Playstatus;
