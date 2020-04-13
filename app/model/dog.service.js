var sql = require('./db.config.js');

//TODO - Maybe not const?
const INSERT_DOG = "INSERT INTO dogs SET ?";
const SELECT_DOG_BY_ID = "SELECT dog FROM dogs WHERE ID = ? ";
const SELECT_ALL = "SELECT * FROM dogs";
const UPDATE_DOG_BY_ID = "UPDATE dog SET dog = ? WHERE ID = ?";
const DELETE_DOG_BY_ID = "DELETE FROM dogs WHERE ID = ?";

var Dog = function (dog) {
    this.id = dog.id;
    this.name = dog.name;
    this.breed = dog.breed;
    this.created_at = new Date();
};
Dog.addDog = function (newDog, result) {
    sql.query(INSERT_DOG, newDog, function (err, res) {
        console.log("--> INSERT_DOG");
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Dog.getDogById = function (id, result) {
    console.log("--> SELECT_DOG_BY_ID");
    sql.query(SELECT_DOG_BY_ID, id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Dog.getAllDogs = function (result) {
    console.log("--> SELECT_ALL");
    sql.query(SELECT_ALL, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('dogs : ', res);

            result(null, res);
        }
    });
};
Dog.updateDogById = function (id, dog, result) {
    console.log("--> UPDATE_DOG_BY_ID");
    sql.query(UPDATE_DOG_BY_ID, [dog, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Dog.deleteDogById = function (id, result) {
    console.log("--> DELETE_DOG_BY_ID");
    sql.query(DELETE_DOG_BY_ID, [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Dog;