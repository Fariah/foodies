'use strict';


var mongoose = require('mongoose'),
    Foods = mongoose.model('Foods');

exports.list_all_foods = function(req, res) {
    Foods.find({}, function(err, foods) {
        if (err)
            res.send(err);
        res.json(foods);
    });
};

exports.create_food = function(req, res) {
    var new_food = new Foods(req.body);
    new_food.save(function(err, food) {
        if (err)
            res.send(err);
        res.json(food);
    });
};


exports.get_food = function(req, res) {
    Foods.findById(req.params.foodId, function(err, food) {
        if (err)
            res.send(err);
        res.json(food);
    });
};


exports.update_food = function(req, res) {
    Foods.findOneAndUpdate({_id: req.params.foodId}, req.body, {new: true}, function(err, food) {
        if (err)
            res.send(err);
        res.json(food);
    });
};


exports.delete_food = function(req, res) {
    Foods.remove({
        _id: req.params.foodId
    }, function(err, food) {
        if (err)
            res.send(err);
        res.json({ message: 'Food successfully deleted' });
    });
};
