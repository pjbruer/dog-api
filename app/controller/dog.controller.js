var Dog = require('../model/dog.service.js');

//TODO - fix proper response status and exception/error handling

exports.createDog = function (req, res) {
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

exports.findById = function (req, res) {
    console.log("/find was called on api");
    Dog.getDogById(req.params.id, function (err, dog) {
        if (err)
            res.send(err);
        res.json(dog);
    });
};

exports.findAll = function (req, res) {
    console.log("/findAll was called on api");
    Dog.getAllDogs(function (err, dogs) {
        console.log('controller')
        if (err) {
            res.send(err);
        }
        console.log('res', dogs);
        res.status(200).send({ "dogs": [dogs] });
    });
};


exports.updateDog = (req, res) => {
    console.log("/update was called on api");
    Dog.updateDogById(req.params.id, new Dog(req.body), function (err, dog) {
        if (err) {
            res.send(err);
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


exports.removeDog = function (req, res) {
    console.log("/remove was called on api");
    Dog.deleteDogById(req.params.id, function (err, dog) {
        if (err)
            res.send(err);
        res.json({ message: 'Dog successfully deleted' });
    });
};