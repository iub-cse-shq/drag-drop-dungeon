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
	res.render('./../public/views/about.ejs', {
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

exports.test_make = function(req, res) {
	res.render('./../public/views/test_make.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.test_play = function(req, res) {
	res.render('./../public/views/test_play.ejs', {
		user: req.user || null,
		request: req
	});
};
	
exports.map_select = function(req, res) {
res.render('./../public/views/map_select.ejs', {
	user: req.user || null,
	request: req
	});
};
