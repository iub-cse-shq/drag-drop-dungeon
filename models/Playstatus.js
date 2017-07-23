var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

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

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
