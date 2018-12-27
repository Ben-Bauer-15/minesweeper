var User = require('../models/game').user
var Game = require('../models/game').game
var bcrypt = require('bcrypt')

var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'minesweeper000@gmail.com',
      pass: 'Panthers11*'
    }
  });

var validator = require('validator')


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
            if (arr.length == 0){
                res.json({message : "Failure"})
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
        var newGame = new Game({
            difficulty : req.body.difficulty,
            time : req.body.time,
            createdAt : new Date(),
            userID : "Anonymous"
        })
        if (!req.body.userID){
            newGame.save(function(err){
                if(err){
                    console.log("Something went wrong: ", err)
                }
                else {
                    console.log(newGame)
                    res.json({message : "Success"})
                }
            })
        }
        else {
            newGame.userID = req.body.userID
            
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
    },

    emailFriend : function(req, res){
        if (validator.isEmail(req.body.email)) {
            var mailOptions = {
                from: 'minesweeper000@gmail.com',
                to: req.body.email,
                subject: 'Play me on a game of minesweeper!',
                text: "Hi there! A friend of yours wants to compete against you in a game of minesweeper. Click on this link to start!\n" + req.body.link
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
    }

}