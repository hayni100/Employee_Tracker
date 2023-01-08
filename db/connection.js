const mysql = require("mysql2");

const connection = mysql.createConnection(
  {
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "employeeManager_db",
  },
  console.log("connected to the employeeManger_db databas.")
);
connection.connect(function (err) {
  if (err) throw err;
});


module.exports = connection;
