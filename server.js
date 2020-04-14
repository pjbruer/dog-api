const express = require('express');
const parser = require('body-parser');
const mysql = require('mysql');
const routes = require('./app/routes/dog.routes');

const port = 3000;
const app = express();

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db'
});

database.connect();

app.listen(port);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

routes(app);

console.log(`api is alive and running on: ${port}`);
