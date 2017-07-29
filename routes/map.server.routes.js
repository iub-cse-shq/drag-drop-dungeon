module.exports = function(app){

 var maps = require('./../controllers/maps.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

//API routes
 app.route('/api/maps')
	.get(maps.list)
	.post(users.requiresLogin, maps.create);

  app.route('/api/maps/:mapId')
	.get(maps.read)
  .delete(users.requiresLogin, maps.delete);

	app.route('/api/maps/edit/:mapId')
	.get(maps.read)
	.put(users.requiresLogin, maps.update);

//Routes to render views
  app.route('/maps/new').get(maps.new);
  app.route('/maps/all').get(maps.all);
  app.route('/maps/:mapId').get(maps.view);

app.param('mapId', maps.mapByID);


}