'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContributionsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Rooms'
    },
    amount: {
        type: Number,
        Required: 'Kindly enter the name of the room'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contributions', ContributionsSchema);