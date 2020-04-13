module.exports = function (app) {
    var controller = require('../controller/dog.controller');

    app.route('/api/dog')
        .post(controller.create);

    app.route('/api/dog/:id')
        .get(controller.find)
        .put(controller.update)
        .delete(controller.remove);

    app.route('/api/dogs')
        .get(controller.findAll)
};