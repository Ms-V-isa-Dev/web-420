var User = require("../models/user");

//Register a new user on POST
exports.user_register = function(request, response){
  response.send("NOT IMPLEMENTED: User registration POST");
};

//Verify token on GET
exports.user_token = function(request, response){
  response.send("NOT IMPLEMENTED: User token lookup GET");
};
