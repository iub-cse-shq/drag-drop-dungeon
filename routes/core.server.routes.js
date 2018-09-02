'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/create').get(core.new);
	app.route('maps/all').get(core.all);
	app.route('/index').get(core.index);
	
	app.route('/create1').get(core.create1);
	app.route('/create2').get(core.create2);
	app.route('/list').get(core.list);
		
};