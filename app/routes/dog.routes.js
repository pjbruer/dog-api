module.exports = function (app) {
    var controller = require('../controller/dog.controller');

    app.route('/api/dog')
        .post(controller.create);

    app.route('/api/dog/:id')
        .get(controller.find)

    app.route('/api/update/:id')
        .put(controller.update)

    app.route('api/delete/:id')
        .delete(controller.remove);

    app.route('/api/dogs')
        .get(controller.findAll)
};