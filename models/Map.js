var mongoose = require('mongoose');
var Schema = mongoose.Schema;
   
var MapSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
  },
  
  cells: {
    type: String,
    default: ''
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

var Map = mongoose.model('Map', MapSchema, 'maps');
module.exports = Map;
