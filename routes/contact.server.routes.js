module.exports = function(app){

 var contact = require('./../controllers/contact.server.controller.js');


  app.route('/submit_user').get(contact.submit_user);
 



}