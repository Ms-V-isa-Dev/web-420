/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso
; Date:   10 May 2020
; Modified by: Verlee Washington
; Description: Creating an api gateway
;===========================================
*/

// API Routes
var express = require("express");
var router = express.Router();
var checkToken = require("../check-token");

var auth_controller = require("../controllers/authController");

//POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

//POST request to login user
router.post("/auth/login", auth_controller.user_login);

//GET request for verifying user tokens
router.get("/auth/token", auth_controller.user_token);

//GET request for checkToken
router.get("/auth/token", checkToken, auth_controller.user_token);

//GET request to logout user
router.get("/auth/logout", auth_controller.user_logout);

module.exports = router;
