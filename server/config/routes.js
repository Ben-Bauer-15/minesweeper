var path = require('path')
var controller = require('../controllers/games')

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(__dirname + 'index.html')
    })

    app.post('/newUser', function(req, res){
        controller.createNewUser(req, res)
    })

    app.all('*', function(req, res){
        res.sendFile(path.resolve("client/public/dist/public/index.html"))
    })
}