var express            = require("express");
var users                 = require("./app/controllers/users.controller");
var app                    = express();
var bodyParser     = require("body-parser");

app.use(bodyParser.json());

app.get("/", function(req,res) {
    res.send("Hello World!");
})

app.use("/users", users);

app.listen(5000, function(){
    console.log("App listening on port 3000!");
})