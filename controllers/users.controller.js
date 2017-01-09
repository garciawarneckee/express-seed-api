var express = require("express");
var usersRepository = require('../repositories/users.repository');
var router = express.Router();

router.get('/', function(req, res) {
    
usersRepository.find(function(error, users){
         if (error) return console.error(err);
         res.json(users);
    });
})

module.exports = router;