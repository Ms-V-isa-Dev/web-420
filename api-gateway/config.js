/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso
; Date:   10 May 2020
; Modified by: Verlee Washington
; Description: Creating an api gateway
;===========================================
*/
var config = {};
config.web = {};
config.web.secret = "topsecret"
config.web.port = process.env.PORT || "3000";
module.exports = config;
