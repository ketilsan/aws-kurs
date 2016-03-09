var mysql = require("mysql");

var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password"
});

conn.connect(function(err) {
  if(err) {
    console.log("Error connecting to mysql");
    return;
  }
  console.log("mysql connected");
});

conn.end(function(err) {
  console.log("mysql disconnected");
});
