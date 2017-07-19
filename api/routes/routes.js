'use strict';
module.exports = function(app) {
    var usersController = require('../controllers/usersController');
    var foodiesController = require('../controllers/roomsController');


    // users Routes
    app.route('/users')
        .get(usersController.list_all_users)
        .post(usersController.create_a_user);

    app.route('/users/:userId')
        .get(usersController.read_a_user)
        .put(usersController.update_a_user)
        .delete(usersController.delete_a_user);

    // rooms Routes
    app.route('/rooms')
        .get(roomsController.list_all)
        .post(roomsController.create_a_room);

    app.route('/foodies/:foodyId')
        .get(roomsController.read_a_room)
        .put(roomsController.update_a_room)
        .delete(roomsController.delete_a_room);
};