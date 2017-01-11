var express = require("express");
var usersRepository = require('../repositories/users.repository');
var router = express.Router();

router.get('/', function(req, res) {
usersRepository.find(function(error, users){
         if (error) return console.error(err);
         res.json(users);
    });
});

router.post("/", function(req, res){
    var user = req.body;
    usersRepository.create(user).then(function(err, ok){
        if(err) return res.send(err);
        res.send("Usuario creado!");
    })
})

module.exports = router;