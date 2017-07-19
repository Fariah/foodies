'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RoomsSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String,
        Required: 'Kindly enter the name of the room'
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'completed']
        }],
        default: ['active']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Rooms', RoomsSchema);