var sockets = []

var express = require('express')
var app = express()
app.use(express.static(__dirname + '/client/public/dist/public'))
require('./server/config/routes')(app)

const server = app.listen(8000, '192.168.0.212', () => {
    console.log("Listening on port 8000")
})

var io = require('socket.io')(server)

io.on('connection', (socket) => {
    sockets.push(socket)
    console.log("\n a new user has entered the game")
    console.log(socket.id)
    console.log("\n")

    io.emit('welcome', sockets.length)

    socket.on('disconnect', function(){
        
        for (var i = 0; i < sockets.length; i++){
            if (sockets[i].id == socket.id){
                sockets.splice(i,1)
            }
        }
        
        io.emit('disconnect')
        console.log("someone left. current sockets are: ", sockets.length)
    })
    
    socket.on('clicked', (data) => {
        socket.broadcast.emit('clicked', data)
    })
})