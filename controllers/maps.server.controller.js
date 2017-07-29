var mongoose = require('mongoose');
var Map = require('./../models/Map.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Map.find(function(err, data) {
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

exports.new = function(req, res) {
	res.render('./../public/views/map/create.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.view = function(req, res) {
	res.render('./../public/views/map/view.ejs', {
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
      console.log("api called");
      console.log(data);

      res.render('./../public/views/map/list.ejs', {
    		user: req.user || null,
    		request: req,
        maps: data
    	});
    }
  });

};

module.exports.create = function(req, res) {
  console.log(req.user);
  var map = new Map(req.body);
  map.user = req.user;
  map.save(function(err, data) {
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
  res.json(req.map);
};

exports.delete = function(req, res) {
	var map = req.map;
	map.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(map);
		}
	});
};


module.exports.update = function(req, res) {
  var map = req.map;

  	map = _.extend(map, req.body);

  	map.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(map);
  		}
  	});
};

exports.mapByID = function(req, res, next, id) {
	Map.findById(id).populate('user', 'email').exec(function(err, map) {
		if (err) return next(err);
		if (!map) return next(new Error('Failed to load map ' + id));
		req.map = map;
		next();
	});
};