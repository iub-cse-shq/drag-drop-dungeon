'use strict';

exports.index = function(req, res) {
	res.render('./../public/views/map/index.ejs', {
		user: req.user || null,
		request: req
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

exports.create1 = function(req, res) {
	res.render('./../public/views/map/create1.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.create2 = function(req, res) {
	res.render('./../public/views/map/create2.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.list = function(req, res) {
	res.render('./../public/views/map/list.ejs', {
		user: req.user || null,
		request: req
	});
};
app.post('/submit_user', function(req,res){
 console.log(req.body);
 save(req.body);
 res.status(200);
 var new_user = new User(req.body);
 new_user.save(function(err, data){
   if(err){
     return res.status(400).json({message: "Could not save user"})
   }
   res.status(200).json(data);
 })
});
exports.all = function(req, res) {
  Map.find(function(err, data) {
    if (err) {
      return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
    } else {
      console.log(data);

      res.render('./../public/views/map/list.ejs', {
    		user: req.user || null,
    		request: req,
                maps: data
    	});
    }
  });

};