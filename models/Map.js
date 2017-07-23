var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  content: [],

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
