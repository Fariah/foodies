'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the user',
        trim: true
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'dissabled']
        }],
        default: ['active']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);