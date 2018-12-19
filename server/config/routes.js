var path = require('path')
var controller = require('../controllers/games')

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(__dirname + 'index.html')
    })

    app.post('/newUser', function(req, res){
        controller.createNewUser(req, res)
    })

    app.post('/login', function(req, res){
        controller.loginUser(req, res)
    })

    app.get('/userScores/:id', function(req, res){
        controller.getAllUserScores(req, res)
    })

    app.get('/allScores/:difficulty', function(req, res){
        controller.getAllGlobalScores(req, res)
    })

    app.get('/checkEmail/:email', function(req, res){
        controller.checkEmail(req, res)
    })

    app.post('/newSingle', function(req, res){
        controller.saveSinglePlayerGame(req, res)
    })

    app.all('*', function(req, res){
        res.sendFile(path.resolve("client/public/dist/public/index.html"))
    })
}