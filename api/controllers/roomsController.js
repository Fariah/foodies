'use strict';


var mongoose = require('mongoose'),
    Rooms = mongoose.model('Rooms');

exports.list_all_rooms = function(req, res) {
    Rooms.find({}, function(err, rooms) {
        if (err)
            res.send(err);
        res.json(rooms);
    });
};


exports.create_room = function(req, res) {
    var new_room = new Rooms(req.body);
    console.log('req.body: ', req.body);
    new_room.save(function(err, room) {
        if (err)
            res.send(err);
        res.json(room);
    });
};


exports.get_room = function(req, res) {
    Rooms.findById(req.params.roomId, function(err, room) {
        if (err)
            res.send(err);
        res.json(room);
    });
};


exports.update_room = function(req, res) {
    Rooms.findOneAndUpdate({_id: req.params.roomId}, req.body, {new: true}, function(err, room) {
        if (err)
            res.send(err);
        res.json(room);
    });
};


exports.delete_room = function(req, res) {
    Rooms.remove({
        _id: req.params.roomId
    }, function(err, room) {
        if (err)
            res.send(err);
        res.json({ message: 'Room successfully deleted' });
    });
};
