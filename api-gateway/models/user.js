/*
============================================
; Title:  Exercise 4.3
; Author: Professor Krasso
; Date:   05 May 2020
; Modified by: Verlee Washington
; Description: Creating user fields and adding
;               new users.
;===========================================
*/

// Formatted header
var header = require("../Washington-header");

// Fields username, password, and email
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  username:"String",
  password:"String",
  email:"String"
});
module.exports = mongoose.model("User", userSchema);

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = {_id: id};
};


