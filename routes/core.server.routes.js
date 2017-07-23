'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/play').get(core.play);
	app.route('/make').get(core.make);
	app.route('/test_make').get(core.test_make);
	app.route('/test_play').get(core.test_play);
};