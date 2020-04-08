//var auth = require('express-basic-auth')
var express = require('express');
var parser = require("body-parser");
//process.env.NODE_ENV - fetch secrets from aws secrets manager
var api = express();
/*api.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))*/


//TODO - Refactor and break out code into modules

api.use(parser.urlencoded({ extended: false }));
api.use(parser.json());

const hostname = '127.0.0.1';
const port = 3000;

api.get('/', (req, res) => {
    console.log('startpage was called on api');
    res.status(200).json('try endpoints /dogs and /dog/id');
});

api.get('/dogs', (req, res) => {
    console.log('/dogs was called on api');
    res.status(200).json(['gora', 'moss', 'fidde']);

});

api.get('/dog/:id', (req, res) => {
    console.log('/dog/id was called on api');
    var id = req.params.id;
    if (id == '1') {
        console.log('param sent in: ' + id);
        res.status(200).json({
            "dog_id": "1",
            "dog_name": "Gora",
            "dog_breed": "Schäfer"
        });
    } else {
        console.log('param sent in: ' + id);
        res.status(404).json('dog was not found, try with id 1!');
    }
});

api.post('/save', (req, res) => {
    console.log('/save was called on api');
})

api.listen(3000, () => {
    console.log(`server running on hostname ${hostname} and on port ${port}`)
});