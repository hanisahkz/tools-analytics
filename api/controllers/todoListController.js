'use strict';

// import asdCanBeCalledAnything from '../routes/todoListRoute'; //because of 'export default' from producer

// const mongoose = require('mongoose'), Task = mongoose.model('Tasks');
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

//how to convert into es6?
// asdCanBeCalledAnything.list_all_tasks = (req, res) => {
//     Task.find({}, (err, task) => {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

//es5 - you can't simply call by any random name
exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// asdCanBeCalledAnything.create_a_task = (req, res) => {
//     var new_task = new Task(req.body);
//     new_task.save((err, task) => {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

//es5
exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// asdCanBeCalledAnything.read_a_task = (req, res) => {
//     Task.findById(req.params.taskId, (err, task) => {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

//es5
exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// asdCanBeCalledAnything.update_a_task = (req, res) => {
//     Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

//es5
exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// asdCanBeCalledAnything.delete_a_task = (req, res) => {
//     Task.remove({
//         _id: req.params.taskId
//     }, (err, task) => {
//         if (err)
//             res.send(err);
//         res.json({ message: 'Task successfully deleted' });
//     });
// };

//es5
exports.delete_a_task = function(req, res) {
    Task.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};