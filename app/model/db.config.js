var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connection to database was successful")
});

module.exports = connection;