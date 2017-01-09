var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/seed-api");

var usersSchema = mongoose.Schema({
        name: String,
        lastName: String
    });    

var usersRepository = mongoose.model('users', usersSchema);

module.exports = usersRepository;