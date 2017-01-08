var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.json(
        [
            {"users": "Esteban",
             "lastName": "Garcia"
            },
            {"users": "Florencia",
             "lastName": "Prandi"
            }
        ]
    )
})

module.exports = router;