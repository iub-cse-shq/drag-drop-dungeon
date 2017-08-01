/*var mongoose = require('mongoose');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Login = require('./../models/Login.js');
var errorHandler = require('./errors.server.controller');

var db = "mongodb://localhost/example";
mongoose.connect(db);

var port = 8080;
app.listen(port,function(){
  console.log("app is listening on port "+ port);
});*/

var mongoose = require('mongoose');
var Login = require('./../models/Login.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Login.find(function(err, data) {
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
//create 
module.exports.create = function(req, res) {
  var Login = new Login(req.body);
  Login.user = req.user;
  Login.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};
//read
module.exports.read = function(req, res) {
  res.json(req.Login);
};