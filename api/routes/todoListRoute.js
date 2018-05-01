'use strict';

//this means exporting module that contains todoList routes
module.exports = (app) => {
    //think ahead - want to access methods from controller. So, need to access todoListController module
    const todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    //for methods available in express ^4.16, refer: http://expressjs.com/en/4x/api.html#app.route
    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .post(todoList.update_a_task);

    //had to define as a separate route as there's no method 'delete'
    app.route('/tasks/delete/:taskId')
        .post(todoList.delete_a_task);

    //experiment not successful
    //test route and template
    app.route('/asd')
        .get(todoList.list_all_asd);

};