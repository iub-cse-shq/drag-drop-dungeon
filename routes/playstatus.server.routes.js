module.exports = function(app){

 var playstatus = require('./../controllers/playstatus.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/playstatus')
	.get(playstatus.list)
	.post(users.requiresLogin, playstatus.create);

  app.route('/api/playstatus/:playstatusId')
	.get(playstatus.read)
  .delete(users.requiresLogin, playstatus.delete);

	app.route('/api/playstatus/edit/:playstatusId')
	.get(playstatus.read)
	.put(users.requiresLogin, playstatus.update);


app.param('playstatusId', playstatus.playstatusByID);


}
