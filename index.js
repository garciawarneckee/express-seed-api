var express = require("express");
var users = require("./controllers/users.controller")
var app = express();

app.get("/", function(req,res) {
    res.send("Hello World!");
})

app.use("/users", users);

app.listen(3000, function(){
    console.log("App listening on port 3000!");
})