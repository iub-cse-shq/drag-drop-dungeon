module.exports = function(app){

    var maps = require('./../controllers/maps.server.controller.js');
    var users = require('./../controllers/users.server.controller.js');

   //Routes to render views
   app.route('/maps/new').get(maps.new);   //this route should open your map maker page
   app.route('/maps/all').get(maps.all);   //this route will open list.ejs for maps, where all maps will be listed 

}
