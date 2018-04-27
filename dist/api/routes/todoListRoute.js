'use strict';

//even this can be improved further. Refer: https://github.com/developit/express-es6-rest-api/blob/master/src/api/index.js
// export default function asdCanBeNamedAnything(app) {
//     const todoList = require('../controllers/todoListController');
//
//     // todoList Routes
//     app.route('/tasks')
//         .get(todoList.list_all_tasks)
//         .post(todoList.create_a_task);
//
//
//     app.route('/tasks/:taskId')
//         .get(todoList.read_a_task)
//         .put(todoList.update_a_task)
//         .delete(todoList.delete_a_task);
// };

// these are methods need to be defined in the controller todoList.list_all_tasks
// these are methods need to be defined in the controller todoList.create_a_task
// these are methods need to be defined in the controller todoList.read_a_task
// these are methods need to be defined in the controller todoList.update_a_task
// these are methods need to be defined in the controller todoList.delete_a_task

//es5

module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/tasks').get(todoList.list_all_tasks).post(todoList.create_a_task);

    //for methods available in express ^4.16, refer: http://expressjs.com/en/4x/api.html#app.route
    app.route('/tasks/:taskId').get(todoList.read_a_task).post(todoList.update_a_task);

    //had to define as a separate route as there's no method 'delete'
    app.route('/tasks/delete/:taskId').post(todoList.delete_a_task);
};