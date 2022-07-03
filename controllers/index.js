/* File name: index.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

let express = require("express");
let router = express.Router();

module.exports.routeToHomePage = (req, res, next) => {
    res.render("index", {
        title: "Home",
        displayName: req.user ? req.user.displayName : "",
    });
};

module.exports.routeToAboutMe = (req, res, next) => {
    res.render("index", {
        title: "About Me",
        displayName: req.user ? req.user.displayName : "",
    });
};

module.exports.routeToProjects = (req, res, next) => {
    res.render("index", {
        title: "Projects",
        displayName: req.user ? req.user.displayName : "",
    });
};

module.exports.routeToSer = (req, res, next) => {
    res.render("index", {
        title: "My Services",
        displayName: req.user ? req.user.displayName : "",
    });
};

// module.exports.routeToServices = (req, res, next) => {
//     res.render("index", {
//         title: "Services",
//         displayName: req.user ? req.user.displayName : "",
//     });
// };

module.exports.routeToContactMe = (req, res, next) => {
    res.render("index", {
        title: "Contact Me",
        displayName: req.user ? req.user.displayName : "",
    });
};