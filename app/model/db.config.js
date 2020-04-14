var mysql = require('mysql');

console.log("db.config was loaded")

//local mysql database connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connection to database was successful")
});

module.exports = connection;