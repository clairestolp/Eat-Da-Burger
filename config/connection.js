const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'Passw0rd',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId);
});

module.exports = connection;