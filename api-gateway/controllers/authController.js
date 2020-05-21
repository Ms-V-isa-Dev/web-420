/*
============================================
; Title:  Exercise 4.3
; Author: Professor Krasso
; Date:   05 May 2020
; Modified by: Verlee Washington
; Description: //Implementing user_register and user_token functions
;===========================================
*/

// Formatted header
var header = require("../Washington-header");


var User = require("../models/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../config");

//Register a new user on POST
exports.user_register = function(request, response){
  var hashedPassword = bcrypt.hashSync(request.body.password, 8);

  var newUser = new User({
    username: request.body.username,
    password: hashedPassword,
    email: request.body.email
  });

  User.add(newUser, (err, user) => {
    if (err)
        return response.status(500).send("There was a problem registering the user.");

    var token = jwt.sign({id: user._id}, config.web.secret, {
      expiresIn: 86400 // 24 hours
    });

    response.status(200).send({ auth: true, token: token });
  });
};

//Verify token on GET
exports.user_token = function(request, response){
  var token = request.headers["x-access-token"];

  if (!token) return response.status(401).send({ auth: false, message: "No token provided"});

  jwt.verify(token, config.web.secret, function(err, decoded) {
    if (err) return response.status(500).send({ auth: false, message: "Failed to authenticate token."});

    User.getById(decoded.id, function(err, user) {
      if (err) return response.status(500).send("There was a problem finding the user.");

      if (!user) return response.status(407).send("No user found");

      response.status(200).send(user);
    });
  });
};


