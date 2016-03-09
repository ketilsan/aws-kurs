var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Tracking"
});
conn.connect(function(err) {
    if (err) {
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
/*
    conn.query("INSERT INTO Locations SET ?", location, function(err, res) {
        if (err) throw err;
        console.log("location ID", res.insertId);
        conn.end(function(err) {
            console.log("mysql disconnected");
        });
    });
*/
/*
    conn.query("SELECT * FROM Locations", function(err, rows) {
        if (err) throw err;
        console.log(rows);
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i].id + " -> (" + rows[i].lat + ", " + rows[i].lng + ")");
        }
        conn.end(function(err) {
            console.log("mysql disconnected");
        });
    });
    */
    /*
    conn.query("UPDATE Locations SEt lat = ?, lng = ? WHERE id = ?", ["1.8765432", "123.56789", 1], function(err, result) {
        if (err) throw err;
        console.log("Row(s) modified " + result.changedRows);
                conn.end(function(err) {
            console.log("mysql disconnected");
        });
    });
    */
    conn.query("DELETE FROM Locations WHERE id = ?", [1], function(err, result) {
        if (err) throw err;
        console.log("Row(s) deleted: " + result.affectedRows);
        conn.end(function(err){
            console.log("mysql disconnected");
        });
    });
});
/*
conn.end(function(err) {
    console.log("mysql disconnected");
});
*/
