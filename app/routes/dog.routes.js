module.exports = function (app) {
    var controller = require('../controller/dog.controller');

    app.route('/api/dog')
        .post(controller.createDog);

    app.route('/api/dog/:id')
        .get(controller.findById)

    app.route('/api/dogs')
        .get(controller.findAll)

    app.route('/api/update/:id')
        .put(controller.updateDog)

    app.route('api/delete/:id')
        .delete(controller.removeDog);
};