'use strict';


var mongoose = require('mongoose'),
    Foodies = mongoose.model('Foodies');

exports.list_all_foodies = function(req, res) {
    Foodies.find({}, function(err, foodies) {
        if (err)
            res.send(err);
        res.json(foodies);
    });
};




exports.create_a_foody = function(req, res) {
    var new_foody = new Foodies(req.body);
    new_foody.save(function(err, foody) {
        if (err)
            res.send(err);
        res.json(foody);
    });
};


exports.read_a_foody = function(req, res) {
    Foodies.findById(req.params.foodyId, function(err, foody) {
        if (err)
            res.send(err);
        res.json(foody);
    });
};


exports.update_a_foody = function(req, res) {
    Foodies.findOneAndUpdate({_id: req.params.foodyId}, req.body, {new: true}, function(err, foody) {
        if (err)
            res.send(err);
        res.json(foody);
    });
};


exports.delete_a_foody = function(req, res) {


    Foodies.remove({
        _id: req.params.foodyId
    }, function(err, foody) {
        if (err)
            res.send(err);
        res.json({ message: 'Foody successfully deleted' });
    });
};
