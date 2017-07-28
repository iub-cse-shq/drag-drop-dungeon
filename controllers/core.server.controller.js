'use strict';

exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.new = function(req, res) {
	res.render('./../public/views/create.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.edit = function(req, res) {
	res.render('./../public/views/edit.ejs', {
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
