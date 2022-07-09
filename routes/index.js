/* File name: index.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

var express = require("express");
var router = express.Router();

let indexRouteController = require("../controllers/index");
/* GET home page. */
router.get("/", indexRouteController.routeToHomePage);
/* GET home page. */
router.get("/home", indexRouteController.routeToHomePage);
/* GET aboutme page. */
router.get("/aboutme", indexRouteController.routeToAboutMe);
/* GET projects page. */
router.get("/projects", indexRouteController.routeToProjects);
/* GET services page. */
router.get("/services", indexRouteController.routeToSer);

/* GET contact page. */
router.get("/contactme", indexRouteController.routeToContactMe);

module.exports = router;