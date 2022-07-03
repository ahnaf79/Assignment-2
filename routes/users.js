/* File name: users.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

var express = require('express');
var router = express.Router();

router.get('/', userspage);


function userspage(req, res, next) {
    res.render(
        'users', {
            title: 'Users',
            userName: 'Ahnaf'
        }

    );

}

module.exports = router;