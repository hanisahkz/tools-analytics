'use strict'; //?

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//this will create a new
var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Task name is required!'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);