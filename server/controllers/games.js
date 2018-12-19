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
                    userName : req.body.userName,
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
                        res.json({message : "Success", data : newUser._id})
                    }
                })
            }
        })
    },

    loginUser : function(req, res){

        User.find({email : req.body.email}, function(err, arr){
            var user = arr[0]
            console.log(user)
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                
                bcrypt.compare(req.body.password, user.password, function(err, same){
                    if (err){
                        console.log("Something went wrong: ", err)
                    }
                    else {
                        if (!same){
                            res.json({message : "Failure"})
                        }
                        else {
                            res.json({message : "Success", data : user._id})
                        }
                    }
                })
            }
        })
    },


    checkEmail : function(req, res){
        User.find({email : req.params.email}, function(err, user){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                res.json({message : "Success", data : user})
            }
        })
    },
    
    getAllUserScores : function(req, res){
        User.findOne({_id : Object(req.params.id)}, function(err, user){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                res.json({message : "Success", data : user.games})
            }
        })
    },

    getAllGlobalScores : function(req, res){
    Game.find({difficulty : req.params.difficulty}).sort([['time', 1]]).limit(5).exec(function(err, games){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                res.json({message : "Success", data : games})
            }
        })
    },

    saveSinglePlayerGame : function(req, res){

        let newGame = new Game({
            difficulty : req.body.difficulty,
            time : req.body.time,
            createdAt : new Date(),
            userID : req.body.userID
        })

        newGame.save(function(err){
            if(err){
                console.log("Something went wrong: ", err)
            }
            else {

                User.updateOne({_id : Object(req.body.userID)}, {$push : {games : newGame}}, function(err){
                    if(err){
                        console.log("Something went wrong: ", err)
                    }
                    else {
                        console.log(newGame)
                        res.json({message : "Success"})
                    }
                })
            }
        })
    }
}