var mongoose = require('mongoose');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Login = require('./../models/Login.js');

var db = "mongodb://localhost/example";
mongoose.connect(db);

var port = 8080;
app.listen(port,function(){
  console.log("app is listening on port "+ port);
});


