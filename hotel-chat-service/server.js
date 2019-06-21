var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))

//app.get('/', function (req,res) {
//	res.send("Hello from server.js");
//});

app.listen(3000);
console.log("Server running on port 3000");
