module.exports = function(app){

 var maps = require('./../controllers/maps.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/maps')
	.get(maps.list)
	.post(users.requiresLogin, maps.create);

  app.route('/api/maps/:mapId')
	.get(maps.read)
  .delete(users.requiresLogin, maps.delete);

	app.route('/api/maps/edit/:mapId')
	.get(maps.read)
	.put(users.requiresLogin, maps.update);


app.param('mapId', maps.mapByID);


}
