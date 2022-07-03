/* File name: contact.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

let express = require('express');
let router = express.Router();
let contactController = require('../controllers/contactList');

function requireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('../../users/login');
    }
    next();
}

//GET contact list
router.get('/', contactController.displayContactList);

//GET particular contact info
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

//POST particular contact info
router.post('/edit/:id', requireAuth, contactController.processEditPage);

//GET to delete particaular contact info
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;