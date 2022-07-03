/* File name: user.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

let mongoose = require('mongoose');
let crypto = require('crypto');

let UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    salt: String,
    provider: String,
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "users"
});

UserSchema.virtual('fullName')
    .get(function() {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function(fullName) {
        let splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    });

UserSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function(username, suffix,
    callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) +
                    1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});


module.exports = mongoose.model('User', UserSchema);