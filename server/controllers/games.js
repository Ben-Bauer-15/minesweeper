var User = require('../models/game').user
var Game = require('../models/game').game
var bcrypt = require('bcrypt')


module.exports = {
    createNewUser : function(req, res){
        bcrypt.hash(req.body.password, 10, function(err, encrypted){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                let newUser = new User({
                    userName : req.body.name,
                    email : req.body.email,
                    password : encrypted, 
                    createdAt : new Date(),
                    games : []
                })
                newUser.save(function(err){
                    if (err){
                        console.log("Something went wrong: ", err)
                    }
                    else {
                        res.json({message : "Success", data : newUser})
                    }
                })
            }
        })
    }
}