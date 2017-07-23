var mongoose = require('mongoose');
var Playstatus = require('./../models/Playstatus.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Playstatus.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var playstatus = new Playstatus(req.body);
  playstatus.user = req.user;
  playstatus.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.playstatus);
};


exports.delete = function(req, res) {
	var playstatus = req.playstatus;
	playstatus.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(playstatus);
		}
	});
};


module.exports.update = function(req, res) {
  var playstatus = req.playstatus;

  	playstatus = _.extend(playstatus, req.body);

  	playstatus.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(playstatus);
  		}
  	});
};

exports.playstatusByID = function(req, res, next, id) {
	Playstatus.findById(id).populate('user', 'email').exec(function(err, playstatus) {
		if (err) return next(err);
		if (!playstatus) return next(new Error('Failed to load playstatus ' + id));
		req.playstatus = playstatus;
		next();
	});
};
