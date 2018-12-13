var path = require('path')
module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(__dirname + 'index.html')
    })

    app.all('*', function(req, res){
        res.sendFile(path.resolve("client/public/dist/public/index.html"))
    })
}