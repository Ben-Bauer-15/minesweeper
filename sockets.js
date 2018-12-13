var publicRooms = []
var privateRooms = []
var io;

module.exports = function(server){
    io = require('socket.io')(server)

    io.on('connection', (socket) => {
        console.log('welcome')
        var id = makeid()
        console.log(id)
        socket.emit('welcome', id)

        socket.on('disconnect', function(){
            
            for (var i = 0; i < publicRooms.length; i++){
                for (var j = 0; j < publicRooms[i].sockets.length; j++){
                    if (publicRooms[i].sockets[j].id == socket.id){
                        publicRooms[i].sockets.splice(j, 1)
                        io.in(publicRooms[i].id).emit('disconnect')
                    }
                }
            }
        })
        
        socket.on('clicked', (data) => {
            socket.to(data.id).emit('clicked', data.board)
        })

        socket.on('userChosePrivateRoom', (data) => {
            privateRooms.push({id : data})
            socket.join(data)
            console.log(privateRooms)
        })
        
        socket.on('connectToPrivateRoom', (data) => {
            console.log(data)
            connectToPrivateRoom(data, socket)
            
        })
    })
}


function connectToPrivateRoom(id, socket){
    socket.join(id)
    io.in(id).emit('gameStarted')
}

function findOpenRoom(socket){
    var joined = false
    
    //this means that the server has just started and no rooms exist yet
    if (publicRooms.length == 0){
        var roomID = makeid()
        publicRooms.push({sockets : [socket], id : roomID})
        
        //tell the newly connected user which room they're in as well as the fact that they're the only one there for now
        socket.emit('welcome', {numUsers : 1, id : roomID})
        socket.join(roomID)
        joined = true
    }
    
    else {
        //parse through all the rooms to find an open slot for the new socket
        // console.log(publicRooms)
        for (var i = 0; i < publicRooms.length; i++){
            
            //if a room has a lonely user in it or is empty, add this new socket to that room
            if (publicRooms[i].sockets.length < 2){
                joined = true
                socket.join(publicRooms[i].id)

                publicRooms[i].sockets.push(socket)
                io.in(publicRooms[i].id).emit('welcome', {numUsers : publicRooms[i].sockets.length, id : publicRooms[i].id})
                break
            }
        }

        //if the entirety of the for loop has been executed, no empty or partial rooms have been found.
        //add a new room to the list of rooms
        if (!joined){
            var roomID = makeid()
            socket.join(roomID)
            publicRooms.push({sockets : [socket], id : roomID})
            socket.emit('welcome', {numUsers : 1, id : roomID})
        }
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


