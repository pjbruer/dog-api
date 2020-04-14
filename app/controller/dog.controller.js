var Dog = require('../model/dog.service.js');

//TODO - fix proper response status and exception/error handling

exports.create = function (req, res) {
    console.log("/create was called on api");
    var dog = new Dog(req.body);

    //TODO - handles null error poorly
    if (!dog.id || !dog.name) {
        res.status(400).send({ error: true, message: 'Please provide a dog with id, name and breed' });
    }
    else {
        Dog.addDog(dog, function (err, dog) {
            if (err)
                res.send(err);
            res.json(dog);
        });
    }
};

exports.find = function (req, res) {
    console.log("/find was called on api");
    Dog.getDogById(req.params.id, function (err, dog) {
        if (err)
            res.send(err);
        res.json(dog);
    });
};

exports.findAll = function (req, res) {
    console.log("/findAll was called on api");
    Dog.getAllDogs(function (err, dog) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', dog);
        res.send(dog);
    });
};


exports.update = function (req, res) {
    console.log("/update was called on api");
    Dog.updateDogById(req.params.id, new Dog(req.body), function (err, dog) {
        if (err)
            res.send(err);
        res.json(dog);
    });
};


exports.remove = function (req, res) {
    console.log("/remove was called on api");
    Dog.deleteDogById(req.params.id, function (err, dog) {
        if (err)
            res.send(err);
        res.json({ message: 'Dog successfully deleted' });
    });
};