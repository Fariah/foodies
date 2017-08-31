'use strict';
module.exports = function(app) {
    var usersController = require('../controllers/usersController'),
    roomsController = require('../controllers/roomsController'),
    foodsController = require('../controllers/foodsController'),
    contributionsController = require('../controllers/contributionsController');



    //############ users Routes ############
    app.route('/users')
        .get(usersController.list_all_users)
        .post(usersController.create_user);

    app.route('/users/:userId')
        .get(usersController.get_user)
        .put(usersController.update_user)
        .delete(usersController.delete_user);
    //######################################


    //############ rooms Routes ############
    app.route('/rooms')
        .get(roomsController.list_all_rooms)
        .post(roomsController.create_room);

    app.route('/rooms/:roomId')
        .get(roomsController.get_room)
        .put(roomsController.update_room)
        .delete(roomsController.delete_room);
    //######################################


    //############ foods Routes ############
    app.route('/foods')
        .get(foodsController.list_all_foods)
        .post(foodsController.create_food);

    app.route('/foods/:foodId')
        .get(foodsController.get_food)
        .put(foodsController.update_food)
        .delete(foodsController.delete_food);
    //######################################


    //############ contributions Routes ############
    app.route('/contributions/:roomId')
        .get(contributionsController.get_contribution);

    app.route('/contributions/:roomId/:userId')
        .post(contributionsController.create_contribution)
        .put(contributionsController.update_contribution)
        .delete(contributionsController.delete_contribution);
    //######################################
};