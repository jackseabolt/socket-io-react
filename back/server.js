const express = require('express');
const app = express(); 
const http = require('http').Server(app); 
const io = require('socket.io')(http); 

io.on('connection', function(socket) {
    console.log('We have a connection')
    socket.on('new-message', function(msg){
        console.log(msg); 
        io.emit('receive-message', msg)
    })
    socket.on('test', function(){
        console.log("mounted")
    })
})

http.listen('3000', function(){
    console.log('You app is listening on 3000'); 
})