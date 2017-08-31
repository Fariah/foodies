'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FoodsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Rooms'
    },
    name: {
        type: String,
        Required: 'Kindly enter the food you want',
        trim: true
    },
    url: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        Required: 'Kindly enter the price of your food'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Foods', FoodsSchema);