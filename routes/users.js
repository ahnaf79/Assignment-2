/* File name: users.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

var express = require('express');
var router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

//Routes for sign-in
router.get('/login', usersController.displayLoginPage);
router.post('/login', usersController.processLoginPage);

// Route for sign-out
router.get('/logout', usersController.processLogout);

module.exports = router;