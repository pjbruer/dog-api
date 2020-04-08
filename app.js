var express = require('express');
var api = express();

const hostname = '127.0.0.1';
const port = 3000;

api.get('/', (req, res) => {
    console.log('startpage was called on api');
    res.status(200).json('try /dogs and /dog/id');
});

api.get('/dogs', (req, res) => {
    console.log('/dogs was called on api');
    res.json(['gora', 'moss', 'fidde']);
});

api.get('/dog/:name', (req, res) => {
    var name = req.params.name;
    if (name == 'gora') {
        console.log('/dog/name was called on api');
        console.log('param sent in: ' + name);
        res.json({ 'name': 'gora', 'age': '7 years old' })
    } else {
        console.log('param sent in: ' + name);
        res.sendStatus(404);
        res.json('dog was not found, try with the name gora!');
    }
});

api.listen(3000, () => {
    console.log(`server running on hostname ${hostname} and on port ${port}`)
});