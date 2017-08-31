'use strict';


var mongoose = require('mongoose'),
    Contributions = mongoose.model('Contributions');



exports.create_contribution = function(req, res) {
    var new_contribution = new Contributions(req.body);
    new_contribution.save(function(err, contribution) {
        if (err)
            res.send(err);
        res.json(contribution);
    });
};


exports.get_contribution = function(req, res) {
    Contributions.find({roomId: req.params.roomId}, function(err, contribution) {
        if (err)
            res.send(err);
        res.json(contribution);
    });
};


exports.update_contribution = function(req, res) {
    Contributions.findOneAndUpdate({roomId: req.params.roomId, userId: req.params.userId}, req.body, {new: true}, function(err, contribution) {
        if (err)
            res.send(err);
        res.json(contribution);
    });
};


exports.delete_contribution = function(req, res) {
    Contributions.remove({
        roomId: req.params.roomId,
        userId: req.params.userId
    }, function(err, contribution) {
        if (err)
            res.send(err);
        res.json({ message: 'Contribution successfully deleted' });
    });
};
