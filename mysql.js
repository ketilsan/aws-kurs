var mysql = require("mysql");

var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"Tracking"
});

conn.connect(function(err) {
  if(err) {
    console.log("Error connecting to mysql");
    return;
  }
  console.log("mysql connected");

  var location =
  {
    userID: "1",
    lat: "1.3578903",
    lng: "103.12345"
  }

  conn.query('INSERT INTO Locations SET ?', location, function (err, res) {
       if (err) throw err;
       console.log("location ID", res.insertId);

       conn.end(function (err) {
           console.log("mysql disconnected")
       })
   });
});

/*
conn.end(function(err) {
  console.log("mysql disconnected");
});
*/
