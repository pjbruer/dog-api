var mysql = require('mysql');

console.log("db.config was loaded")

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("connection to database was successful")
    }
});

module.exports = connection;