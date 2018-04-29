'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this will create a new Collection
const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Task name is required!'
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
}, {
    timestamps: true
    });

//pay attention to what's happening here.
module.exports = mongoose.model('Tasks', TaskSchema);