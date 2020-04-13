const express = require('express')
const parser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

const mysql = require('mysql');
// connection configurations
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

// connect to database
database.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var routes = require('./app/routes/dog.routes');
routes(app);