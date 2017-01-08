var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/seed-api")
var router = express.Router();

router.get('/', function(req, res) {

    var usersSchema = mongoose.Schema({
        name: String,
        lastName: String
    });    
    var userRepository = mongoose.model('users', usersSchema);

    
    userRepository.find(function(error, users){
         if (error) return console.error(err);
         res.json(users);
    });
    // res.json(
    //     [
    //         {"users": "Esteban",
    //          "lastName": "Garcia"
    //         },
    //         {"users": "Florencia",
    //          "lastName": "Prandi"
    //         }
    //     ]
    // )
})

module.exports = router;