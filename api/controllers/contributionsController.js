'use strict';


var mongoose = require('mongoose'),
    Contributions = mongoose.model('Contributions');

exports.list_all_contributions = function(req, res) {
    Contributions.find({}, function(err, contributions) {
        if (err)
            res.send(err);
        res.json(contributions);
    });
};




exports.create_contribution = function(req, res) {
    var new_contribution = new Contributions(req.body);
    new_contribution.save(function(err, contribution) {
        if (err)
            res.send(err);
        res.json(contribution);
    });
};


exports.get_contribution = function(req, res) {
    Contributions.findById(req.params.contributionId, function(err, contribution) {
        if (err)
            res.send(err);
        res.json(contribution);
    });
};


exports.update_contribution = function(req, res) {
    Contributions.findOneAndUpdate({_id: req.params.contributionId}, req.body, {new: true}, function(err, contribution) {
        if (err)
            res.send(err);
        res.json(contribution);
    });
};


exports.delete_contribution = function(req, res) {
    Contributions.remove({
        _id: req.params.contributionId
    }, function(err, contribution) {
        if (err)
            res.send(err);
        res.json({ message: 'Contribution successfully deleted' });
    });
};
