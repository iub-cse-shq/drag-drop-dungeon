var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LoginSchema = {

  u_id: {
    type: String,
    default: '',
    trim: true,
    required: 'user ID required'
  },
  
  u_pw: {
    type: String,
    default: '',
    trim: true,
    required: 'User Password required'
  },

}

var Login = mongoose.model('Login', LoginSchema, 'login');
module.exports = Login;
