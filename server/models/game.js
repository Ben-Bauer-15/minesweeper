var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/minesweeper');
mongoose.Promise = global.Promise;


var GameSchema = new mongoose.Schema({
    difficulty : String,
    time : Number,
    createdAt : Date,
    userID : String
})

var UserSchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String,
    createdAt : Date,
    games : [GameSchema]
})

mongoose.model('Game', GameSchema);
mongoose.model('User', UserSchema);


module.exports = {
    game : mongoose.model('Game'),
    user : mongoose.model('User')
}
