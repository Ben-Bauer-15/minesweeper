

var express = require('express')
var app = express()
app.use(express.static(__dirname + '/client/public/dist/public'))
require('./server/config/routes')(app)

const server = app.listen(8000, '192.168.0.212', () => {
    console.log("Listening on port 8000")
})

require('./sockets')(server)

