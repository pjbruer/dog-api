const express = require('express');
const parser = require('body-parser');
const mysql = require('mysql');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

database.connect();

app.listen(port);

console.log('api is running on: ' + port);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var routes = require('./app/routes/dog.routes');
routes(app);