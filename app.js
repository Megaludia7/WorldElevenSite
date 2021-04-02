// app.js
const mysql= require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'worldeleven'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});