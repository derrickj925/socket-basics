var PORT = process.env.PORT || 3000;

var express = require('express');

var app = express(); //calling express as a function

//create a server using built in node module

var http = require('http').Server(app);//tells node to start new server and use this as a boiler plate

var io=require('socket.io')(http); //calls http directly

//expose folder
app.use(express.static(__dirname + '/public'));


io.on('connection', function() {
	console.log('User connected via socket.io!');
});//listen to events(connection event and run this fucntion)

//start server with http

http.listen(PORT, function () { //callback when server starts
	console.log('Server started');
});