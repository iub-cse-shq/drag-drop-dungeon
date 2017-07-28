var mongoose = require('mongoose');
var Map = require('./../models/Map.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

exports.new = function(req, res) {
	res.render('./../public/views/create.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.view = function(req, res) {
	res.render('./../public/views/view.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.all = function(req, res) {
  Map.find(function(err, data) {
    if (err) {
      return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
    } else {
      console.log(data);

      res.render('./../public/views/list.ejs', {
    		user: req.user || null,
    		request: req,
                maps: data
    	});
    }
  });
};
