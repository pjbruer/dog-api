var express = require('express');
var api = express();

//var auth = require('express-basic-auth')

//process.env.NODE_ENV - fetch secrets from aws secrets manager

/*api.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))*/

const hostname = '127.0.0.1';
const port = 3000;

api.get('/', (req, res) => {
    console.log('startpage was called on api');
    res.status(200).json('try endpoints /dogs and /dog/name');
});

api.get('/dogs', (req, res) => {
    console.log('/dogs was called on api');
    res.status(200).json(['gora', 'moss', 'fidde']);
});

api.get('/dog/:name', (req, res) => {
    console.log('/dog/name was called on api');
    var name = req.params.name;
    if (name == 'gora') {
        console.log('param sent in: ' + name);
        res.status(200).json({ 'name': 'gora', 'age': '7 years old' });
    } else {
        console.log('param sent in: ' + name);
        res.status(404).json('dog was not found, try with the name gora!');
    }
});

api.listen(3000, () => {
    console.log(`server running on hostname ${hostname} and on port ${port}`)
});