var express = require('express')
var app = express()
var session = require('express-session')
app.use(session({
    secret : 'kittens',
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge : 600000}
}))


// DONT FORGET TO CHANGE THIS
var IP = '13.59.90.2'


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser({extended : true}))


app.use(express.static(__dirname + '/client/public/dist/public'))
require('./server/config/routes')(app)

const server = app.listen(8000, () => {
    console.log("Listening on port 8000")
})

require('./sockets')(server, IP)

