'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.make = function(req, res) {
	res.render('./../public/views/make.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.play = function(req, res) {
	res.render('./../public/views/play.ejs', {
		user: req.user || null,
		request: req
	});
};
