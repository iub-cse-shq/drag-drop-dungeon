
module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var login = require('./../controllers/Login.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(login.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
  .delete(login.requiresLogin, articles.delete);

	app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(login.requiresLogin, articles.update);


app.param('articleId', articles.articleByID);

}
