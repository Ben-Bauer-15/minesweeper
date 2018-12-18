var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/minesweeper');
mongoose.Promise = global.Promise;


var UserSchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String,
    createdAt : Date
})


var GameSchema = new mongoose.Schema({
    difficulty : String,
    time : Number,
    createdAt : Date,
    user : UserSchema
})


mongoose.model('Game', GameSchema);
mongoose.model('User', UserSchema);


module.exports = {
    game : mongoose.model('Game'),
    user : mongoose.model('User')
}
