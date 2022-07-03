/* File name: contacts.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
        Name: String,
        Number: String,
        Email: String
    }, {
        Collections: 'contacts',
    }

);

module.exports = mongoose.model('contacts', contactModel);