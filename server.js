var express = require('express')
var app = express()
var IP = '10.0.0.2'
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser({extended : true}))


app.use(express.static(__dirname + '/client/public/dist/public'))
require('./server/config/routes')(app)

const server = app.listen(8000, IP, () => {
    console.log("Listening on port 8000")
})

require('./sockets')(server, IP)

