var Dog = require('../model/dog.service.js');

//TODO - fix proper response status and exception/error handling

exports.createDog = (req, res) => {
    console.log("/createDog was called on api");
    var dog = new Dog(req.body);
    //TODO - handles null error poorly
    if (!dog.id || !dog.name) {
        res.status(400).send({ error: true, message: 'Bad request, please provide dog with id, name, breed' });
    }
    else {
        Dog.addDog(dog, function (err, dog) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(204).send(dog);
            }
        });
    }
};

exports.findById = (req, res) => {
    console.log("/findById was called on api");
    Dog.getDogById(req.params.id, function (err, dog) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(dog);
        }
    });
};

exports.findAll = (req, res) => {
    console.log("/findAll was called on api");
    Dog.getAllDogs(function (err, dogs) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(dogs);
    });
};


exports.updateDog = (req, res) => {
    console.log("/updateDog was called on api");
    Dog.updateDogById(req.params.id, dog, function (err, dog) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send({ msg: "dog was updated" });
        }
    });
};

exports.patchById = (req, res) => {
    if (req.body.password) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
        req.body.password = salt + "$" + hash;
    }
    UserModel.patchUser(req.params.userId, req.body).then((result) => {
        res.status(204).send({});
    });
};


exports.removeDog = (req, res) => {
    console.log("/removeDog was called on api");
    Dog.deleteDogById(req.params.id, function (err, dog) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ msg: 'dog was successfully deleted' });
        }
    });
};