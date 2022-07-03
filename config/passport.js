/* File name: local.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

const passport = require('passport');
const User = require('../models/user');

module.exports = function() {
    const User = require('../models/user');

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            _id: id
        }, '-password -salt', (err, user) => {
            done(err, user);
        });
    });

    require('./local')();
};