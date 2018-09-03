var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactUserSchema = new Schema({  
    contact_user: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
      },

    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email required'
    },
   message: {
        type: String,
        trim: true,
        unique: '',
        required: 'Messages required'
    },
});

var User = mongoose.model('User',contactUserSchema);
module.exports = User;

