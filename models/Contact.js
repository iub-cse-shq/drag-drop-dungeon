var Schema = mongoose.Schema;

var contacSchema = new Schema({  
    contact: {
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
         default: '',
        required: 'Messages required'
    },
   
   
});

var Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;
