var mongoose = require("../configuration/database.configuration");

var usersSchema = mongoose.Schema({
    name: String,
    lastName: String
})

var usersRepository = mongoose.model('users', usersSchema);

module.exports = usersRepository;